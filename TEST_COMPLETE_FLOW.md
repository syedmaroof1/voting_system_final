# ✅ Complete Flow Test Guide - Register → OTP → Login → Vote

## 🎯 Full End-to-End Flow

### 📝 Test Data to Use

```
Name: Test User
Email: testuser@example.com
Phone: 9876543210
Aadhar: 987654321098
Address: 123 Main Street
Password: test123
Profile Photo: Upload any image
```

---

## 🚀 Step-by-Step Complete Flow

### **STEP 1: REGISTER** 
**URL:** http://localhost:5000/register.html

1. Fill in all fields with the test data above
2. Upload a profile photo (any image)
3. Click "Register"
4. **You'll see:**
   - Large OTP box (e.g., `603790`)
   - Your phone number
   - Your Aadhar number
   - "Redirecting..." message
5. **Wait 5 seconds** → Auto-redirects to verify page

**✅ Registration Complete!**

---

### **STEP 2: VERIFY OTP**
**URL:** http://localhost:5000/verify_otp.html

1. The page shows your Aadhar number
2. Enter the OTP you saw in registration (e.g., `603790`)
3. Click "✅ Verify OTP" button
4. **You'll see:**
   - "✅ OTP verified successfully"
   - "🎉 Redirecting to login..."
5. **Wait 2 seconds** → Auto-redirects to login page

**✅ OTP Verified!**

---

### **STEP 3: LOGIN**
**URL:** http://localhost:5000/login.html

1. Enter your Aadhar: `987654321098`
2. Enter your password: `test123`
3. Click "Login"
4. **You'll see:**
   - "Login successful! Redirecting to profile..."
5. **Wait 1.5 seconds** → Auto-redirects to profile page

**✅ Logged In!**

---

### **STEP 4: VIEW PROFILE**
**URL:** http://localhost:5000/profile.html

1. **You'll see:**
   - Your name (from registration)
   - Your Aadhar number
   - Your email
   - Your address
   - "Vote Now" button
   - "Logout" button

**✅ Profile Loaded!**

---

### **STEP 5: VOTE**
**URL:** http://localhost:5000/vote.html

1. **You'll see 3 candidates:**
   - John Smith - Democratic Party
   - Sarah Johnson - Republican Party
   - Michael Brown - Independent Party

2. Click "Vote" button under your chosen candidate
3. Confirm: "Are you sure you want to vote for this candidate?"
4. Click "OK"
5. **You'll see:**
   - "✅ Vote cast successfully" (in green)

**✅ Vote Cast Successfully!**

---

### **STEP 6: TEST DUPLICATE VOTE** (Optional)

1. Try to vote again
2. **You'll see:**
   - "❌ Already voted" (in red)
3. You can only vote once per user!

**✅ One Vote Protection Works!**

---

## 🎯 Complete Flow Summary

```
1. Register → Get OTP
2. Verify OTP → Auto-redirect to Login
3. Login → Auto-redirect to Profile
4. Profile → Click "Vote Now"
5. Vote → Success!
```

## ✅ All Steps Connected Properly!

- ✅ Register shows OTP
- ✅ OTP page auto-redirects to login
- ✅ Login auto-redirects to profile
- ✅ Profile shows real data
- ✅ Vote button works
- ✅ One vote per user protection
- ✅ Beautiful UI on all pages
- ✅ Smooth transitions

## 🔗 Quick Access Links

- **Register:** http://localhost:5000/register.html
- **OTP Verify:** http://localhost:5000/verify_otp.html
- **Login:** http://localhost:5000/login.html
- **Profile:** http://localhost:5000/profile.html
- **Vote:** http://localhost:5000/vote.html
- **Admin:** http://localhost:5000/admin_login.html (mgm/maroof)

## 🎉 Everything Works Perfectly!

Your complete voting system flow is ready and working! 🚀





