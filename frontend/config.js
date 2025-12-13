// API Configuration
const API_CONFIG = {
    // Detect if we're running locally or on a hosted environment
    getBaseURL: function() {
        // Check if we're on localhost
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:5000';
        }
        
        // For hosted environments, use environment variable or default
        // You can set this to your Render backend URL
        return window.API_BASE_URL || 'https://your-backend-app.onrender.com';
    },
    
    // Get full API endpoint
    getEndpoint: function(path) {
        return this.getBaseURL() + path;
    }
};

// Set global API base URL for easy access
window.API_BASE_URL = window.API_BASE_URL || API_CONFIG.getBaseURL();

console.log('API Base URL:', API_CONFIG.getBaseURL());