# 🚀 How to Run the Voting System in VS Code

## Prerequisites

Before running, make sure you have:
- ✅ Node.js installed (v14 or higher)
- ✅ MongoDB installed and running
- ✅ VS Code installed

## Quick Start (Easiest Method)

### 1️⃣ Open Project in VS Code
```bash
# Open VS Code in your project folder
code .
```

### 2️⃣ Open Terminal in VS Code
- Press `Ctrl + ` (backtick key)
- Or go to: `Terminal` → `New Terminal`

### 3️⃣ Install Dependencies (First Time Only)
```bash
npm install
```

### 4️⃣ Start MongoDB (If not running)
Open a new terminal and run:
```bash
mongod
```

### 5️⃣ Start the Server
```bash
npm start
```

### 6️⃣ Open in Browser
- Go to: `http://localhost:5000`
- You should see the voting system homepage!

---

## Alternative Methods

### Method A: Using VS Code Run Button

1. Press `F5` or click the **Run** icon in the sidebar
2. Select **"Start Voting System"** from the dropdown
3. The server will start in the integrated terminal

### Method B: Using VS Code Tasks

1. Press `Ctrl + Shift + P` (Command Palette)
2. Type: `Tasks: Run Task`
3. Select: **"Start Voting System"**

### Method C: Using npm Scripts Panel

1. Open the **Explorer** sidebar (`Ctrl + Shift + E`)
2. Look for **NPM SCRIPTS** section at the bottom
3. Click the ▶️ play button next to **"start"**

---

## 🔧 Troubleshooting

### Problem: Port 5000 already in use
**Solution:**
```bash
# Windows (PowerShell)
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Or change port in backend/.env
PORT=3000
```

### Problem: MongoDB connection error
**Solution:**
1. Make sure MongoDB is running:
   ```bash
   mongod
   ```
2. Check connection string in `backend/.env`:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/voting_system
   ```

### Problem: Module not found errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

## 📱 Access Points

Once the server is running:

| Page | URL |
|------|-----|
| **Home** | http://localhost:5000 |
| **Register** | http://localhost:5000/register.html |
| **Login** | http://localhost:5000/login.html |
| **Vote** | http://localhost:5000/vote.html |
| **Admin Login** | http://localhost:5000/admin_login.html |

### Admin Credentials
- **Username:** `mgm`
- **Password:** `maroof`

---

## 🛑 Stopping the Server

In VS Code Terminal:
- Press `Ctrl + C`
- Or close the terminal

---

## 💡 Pro Tips

### Live Reload with Nodemon (Optional)
```bash
# Install nodemon globally
npm install -g nodemon

# Run with auto-restart
nodemon backend/index.js
```

### View Logs in VS Code
- All server logs appear in the integrated terminal
- Look for:
  - ✅ `MongoDB connected`
  - 🚀 `Server running on port 5000`

### Debug Mode
1. Set breakpoints in your code (click left of line numbers)
2. Press `F5` to start debugging
3. Use Debug Console to inspect variables

---

## 📊 Verify Everything is Working

### Test API Endpoints
Open a new terminal and run:

```bash
# Test vote results
curl http://localhost:5000/api/vote/results

# Test admin users (PowerShell)
Invoke-WebRequest -Uri "http://localhost:5000/api/admin/users" -Method GET
```

### Check Server Status
Look for these messages in terminal:
```
🚀 Server running on port 5000
✅ MongoDB connected
```

---

## 🎉 You're Ready!

The voting system is now running. Users can:
1. Register with their details
2. Verify OTP
3. Login
4. Cast their vote
5. Admins can view results

**Happy Voting! 🗳️**
