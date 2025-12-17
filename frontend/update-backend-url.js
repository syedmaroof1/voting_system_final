// Quick script to update backend URL
// Run this in browser console to change backend URL without editing files

function updateBackendURL(newURL) {
    // Update the global API base URL
    window.API_BASE_URL = newURL;
    
    // Update the config
    if (window.API_CONFIG) {
        window.API_CONFIG.PRODUCTION_BACKEND_URL = newURL;
    }
    
    console.log('✅ Backend URL updated to:', newURL);
    console.log('🔄 Please refresh the page for changes to take effect');
}

// Usage examples:
// updateBackendURL('https://your-actual-backend.onrender.com');
// updateBackendURL('https://voting-backend-xyz.onrender.com');

console.log('📝 To update backend URL, run: updateBackendURL("https://your-backend-url.onrender.com")');