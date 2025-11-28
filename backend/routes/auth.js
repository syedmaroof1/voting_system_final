const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const User = require('../models/user');

// Initialize Twilio only when credentials are provided
function getTwilioClient() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  if (accountSid && authToken && accountSid !== 'your_account_sid' && authToken !== 'your_auth_token') {
    try {
      const twilio = require('twilio');
      return twilio(accountSid, authToken);
    } catch (err) {
      console.log('Twilio not available');
      return null;
    }
  }
  return null;
}

// Function to send SMS
async function sendSMS(phoneNumber, otp) {
  try {
    const client = getTwilioClient();
    const twilioPhone = process.env.TWILIO_PHONE;
    
    if (!client) {
      console.log(`📱 OTP for ${phoneNumber}: ${otp}`);
      return { success: true, message: 'OTP ready (SMS not configured)' };
    }

    await client.messages.create({
      body: `Your OTP for Voting System is: ${otp}. Valid for 10 minutes.`,
      to: `+91${phoneNumber}`,
      from: twilioPhone
    });

    return { success: true, message: 'SMS sent successfully' };
  } catch (error) {
    console.error('Error sending SMS:', error);
    return { success: false, error: error.message };
  }
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../frontend/uploads/'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Error handling middleware for multer
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File size too large. Maximum 5MB allowed.' });
    }
  } else if (err.message === 'Only image files are allowed!') {
    return res.status(400).json({ message: 'Only image files (JPEG, JPG, PNG, GIF) are allowed.' });
  }
  next(err);
};

// Register route with optional file upload
router.post('/register', upload.single('profile_photo'), handleUploadError, async (req, res) => {
  try {
    const { fullname, email, phone, aadhar, address, password } = req.body;

    // Validate required fields
    if (!fullname || !email || !phone || !aadhar || !address || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: 'Phone number must be exactly 10 digits' });
    }

    // Validate Aadhar number (12 digits)
    if (!/^\d{12}$/.test(aadhar)) {
      return res.status(400).json({ message: 'Aadhar number must be exactly 12 digits' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    // Check if user exists with aadhar, email, or phone
    const existingUser = await User.findOne({ $or: [{ aadhar }, { email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this Aadhar, Email, or Phone already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Get uploaded file path
    const profile_photo = req.file ? req.file.filename : '';

    const newUser = new User({ 
      username: fullname,
      email, 
      phone,
      aadhar,
      address,
      password: hashedPassword, 
      profile_photo,
      otp: '',                       // No OTP needed
      otpExpires: null,              // No expiration
      isVerified: true,              // Auto-verified (no OTP needed)
      hasVoted: false,
      role: 'voter'
    });
    
    await newUser.save();
    
    // Return success response
    res.status(201).json({ 
      message: 'User registered successfully! You can now login.', 
      aadhar,
      success: true
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Verify OTP route
router.post('/verify-otp', async (req, res) => {
  try {
    const { aadhar, otp } = req.body;

    const user = await User.findOne({ aadhar });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Check if OTP is valid
    if (!user.otp || user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Check if OTP has expired
    if (user.otpExpires && new Date() > user.otpExpires) {
      return res.status(400).json({ message: 'OTP has expired. Please request a new one.' });
    }

    // Verify user
    user.isVerified = true;
    user.otp = ''; // Clear OTP after verification
    user.otpExpires = null;
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Resend OTP route
router.post('/resend-otp', async (req, res) => {
  try {
    const { aadhar } = req.body;

    const user = await User.findOne({ aadhar });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified' });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send OTP via SMS
    const smsResult = await sendSMS(user.phone, otp);

    res.status(200).json({ 
      message: 'New OTP sent to your phone', 
      otp,
      phone: user.phone,
      smsStatus: smsResult.message
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { aadhar, password } = req.body;

    const user = await User.findOne({ aadhar });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // No OTP verification needed anymore
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret_key', {
      expiresIn: '1d'
    });

    res.json({ token, user: { id: user._id, username: user.username, aadhar: user.aadhar, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;