# Deployment Guide for Maharashtra Voting System

## Overview
This guide explains how to deploy the voting system to production environments like Render, Vercel, or Netlify.

## Backend Deployment (Render)

### 1. Deploy Backend to Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node index.js`
   - **Environment**: Node

### 2. Environment Variables
Set these environment variables in Render:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_admin_password
PORT=5000
```

### 3. Get Backend URL
After deployment, you'll get a URL like: `https://your-backend-app.onrender.com`

## Frontend Deployment

### Option 1: Static Hosting (Netlify/Vercel)

#### Before Deployment:
1. Update `frontend/config.js` with your backend URL:
```javascript
// Replace this line in config.js:
return window.API_BASE_URL || 'https://your-backend-app.onrender.com';

// With your actual Render backend URL:
return window.API_BASE_URL || 'https://your-actual-backend-url.onrender.com';
```

#### Deploy to Netlify:
1. Drag and drop the `frontend` folder to Netlify
2. Or connect your GitHub repository and set:
   - **Publish directory**: `frontend`

#### Deploy to Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `cd frontend && vercel`
3. Follow the prompts

### Option 2: Render Static Site
1. Create a new Static Site on Render
2. Connect your repository
3. Set **Publish directory**: `frontend`

## Environment-Specific Configuration

The system automatically detects the environment:

- **Local Development**: Uses `http://localhost:5000`
- **Production**: Uses the URL set in `config.js`

## Testing the Deployment

1. **Backend Health Check**: Visit `https://your-backend-url.onrender.com/api/health`
2. **Frontend**: Open your deployed frontend URL
3. **Registration**: Try registering a new user
4. **Admin Panel**: Login with admin credentials
5. **Voting**: Add candidates and test voting

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your backend allows your frontend domain
2. **API Connection Failed**: Check if backend URL is correct in `config.js`
3. **MongoDB Connection**: Verify MongoDB URI in environment variables
4. **Admin Login**: Ensure admin credentials are set in environment variables

### Backend CORS Configuration
The backend is already configured to allow all origins in development. For production, update `backend/index.js`:

```javascript
app.use(cors({
    origin: ['https://your-frontend-domain.netlify.app', 'https://your-frontend-domain.vercel.app'],
    credentials: true
}));
```

## Security Notes

1. **Environment Variables**: Never commit sensitive data to GitHub
2. **HTTPS**: Always use HTTPS in production
3. **Admin Credentials**: Use strong passwords
4. **JWT Secret**: Use a strong, random JWT secret
5. **MongoDB**: Use MongoDB Atlas with proper authentication

## Monitoring

- **Backend Logs**: Check Render service logs
- **Frontend Errors**: Use browser developer tools
- **Database**: Monitor MongoDB Atlas metrics

## Backup

- **Database**: Regular MongoDB backups
- **Code**: Keep GitHub repository updated
- **Environment Variables**: Document all required variables

## Support

If you encounter issues:
1. Check browser console for errors
2. Check backend logs in Render dashboard
3. Verify all environment variables are set
4. Test API endpoints directly using tools like Postman