# 🗳️ Online Voting System

A secure, full-stack online voting system built with Node.js, Express, MongoDB, and vanilla JavaScript.

## ✨ Features

- 🔐 **Secure Authentication** - User registration with OTP verification
- 📱 **OTP System** - SMS-based verification (displays on screen)
- 🗳️ **One Vote Per User** - Prevents duplicate voting
- 👤 **User Profiles** - Profile photo upload support
- 📊 **Real-time Results** - Live vote counting
- 🔒 **Admin Panel** - View users and voting results
- 🎨 **Responsive Design** - Works on all devices

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start MongoDB
```bash
mongod
```

### 3. Run the Server
```bash
npm start
```

### 4. Open Browser
```
http://localhost:5000
```

## 📖 Detailed Instructions

See [HOW_TO_RUN.md](HOW_TO_RUN.md) for complete setup and troubleshooting guide.

## 🔑 Admin Access

- **URL:** http://localhost:5000/admin_login.html
- **Username:** `mgm`
- **Password:** `maroof`

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **File Upload:** Multer
- **SMS:** Twilio (optional)

## 📁 Project Structure

```
voting_system/
├── backend/
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── index.js         # Server entry point
│   └── .env             # Environment variables
├── frontend/
│   ├── index.html       # Homepage
│   ├── register.html    # User registration
│   ├── login.html       # User login
│   ├── vote.html        # Voting page
│   ├── admin.html       # Admin dashboard
│   └── uploads/         # Profile photos
└── package.json
```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- OTP verification system
- Input validation
- Duplicate vote prevention
- Secure file upload

## 📱 User Flow

1. **Register** → Enter details + upload photo
2. **Verify OTP** → Enter 6-digit code
3. **Login** → Use Aadhar + password
4. **Vote** → Select candidate
5. **Confirm** → Vote recorded

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/resend-otp` - Resend OTP
- `POST /api/auth/login` - User login

### Voting
- `POST /api/vote/cast` - Cast a vote
- `GET /api/vote/results` - Get vote results

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/users` - Get all users
- `GET /api/admin/results` - Get voting results

## 🔧 Configuration

Edit `backend/.env`:
```env
MONGO_URI=mongodb://127.0.0.1:27017/voting_system
JWT_SECRET=yourSecretKeyHere
PORT=5000

# Optional: Twilio for SMS
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE=+1234567890
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`

### Module Not Found
```bash
rm -rf node_modules
npm install
```

## 📊 Current Status

✅ All features working
✅ Server running on port 5000
✅ MongoDB connected
✅ 8+ users registered
✅ Voting system operational

## 🤝 Contributing

Feel free to fork, improve, and submit pull requests!

## 📄 License

MIT License - feel free to use for your projects!

## 👨‍💻 Support

For issues or questions, check [HOW_TO_RUN.md](HOW_TO_RUN.md) or create an issue.

---

**Made with ❤️ for secure and transparent voting**
