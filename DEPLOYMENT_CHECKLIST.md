# Deployment Checklist

## ✅ Steps to Deploy Successfully

### 1. Backend Deployment (Render)
- [ ] Create new Web Service on Render
- [ ] Connect your GitHub repository
- [ ] Set Build Command: `cd backend && npm install`
- [ ] Set Start Command: `cd backend && node index.js`
- [ ] Add Environment Variables:
  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  ADMIN_USERNAME=admin
  ADMIN_PASSWORD=your_admin_password
  PORT=5000
  ```
- [ ] Deploy and get your backend URL (e.g., `https://your-app-name.onrender.com`)

### 2. Update Frontend Configuration
- [ ] Open `frontend/config.js`
- [ ] Replace `PRODUCTION_BACKEND_URL` with your actual backend URL:
  ```javascript
  PRODUCTION_BACKEND_URL: 'https://your-actual-backend-url.onrender.com',
  ```

### 3. Frontend Deployment
- [ ] Deploy frontend to Render Static Site, Netlify, or Vercel
- [ ] Set Publish Directory: `frontend`

### 4. Update Backend CORS (if needed)
- [ ] In `backend/index.js`, add your frontend URL to corsOptions:
  ```javascript
  origin: [
      'http://localhost:3000',
      'https://your-frontend-url.onrender.com',  // Add this line
      'https://voting-system-final.onrender.com'
  ],
  ```

### 5. Testing
- [ ] Test backend health: Visit `https://your-backend-url.onrender.com/api/health`
- [ ] Test frontend: Open your frontend URL
- [ ] Test registration: Try registering a new user
- [ ] Test admin login: Use admin credentials
- [ ] Test voting: Add candidates and vote

## 🔧 Quick Fixes

### If you get CORS errors:
1. Check that your frontend URL is in the backend CORS configuration
2. Redeploy the backend after updating CORS settings

### If API calls fail:
1. Verify the backend URL in `frontend/config.js`
2. Check browser console for the actual URL being called
3. Test the backend health endpoint directly

### If backend won't start:
1. Check environment variables are set correctly
2. Verify MongoDB connection string
3. Check Render logs for error details

## 📋 Current Configuration

Based on your error message, here's what I've set up:

**Frontend URL**: `https://voting-system-final.onrender.com`
**Backend URL**: `https://voting-system-final-backend.onrender.com` (update this!)

**Next Steps**:
1. Update `frontend/config.js` with your actual backend URL
2. Redeploy frontend
3. Make sure backend CORS allows your frontend domain
4. Test the system

## 🆘 Emergency Backend URL Update

If you need to quickly change the backend URL without redeploying:

1. Open browser console on your frontend
2. Run: `updateBackendURL('https://your-actual-backend-url.onrender.com')`
3. Refresh the page

This is temporary and you should update the config file for permanent fix.