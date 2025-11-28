// Test script to verify the complete voting system functionality
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Test data
const testUser = {
    fullname: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    aadhar: '123456789012',
    address: 'Test Address, Test City',
    password: 'testpass123'
};

async function testCompleteFlow() {
    console.log('🚀 Starting complete voting system test...\n');
    
    try {
        // Test 1: Register user
        console.log('1️⃣ Testing user registration...');
        const formData = new FormData();
        Object.keys(testUser).forEach(key => {
            formData.append(key, testUser[key]);
        });
        
        const registerRes = await axios.post(`${BASE_URL}/api/auth/register`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        console.log('✅ Registration successful!');
        console.log('📱 OTP:', registerRes.data.otp);
        
        // Test 2: Verify OTP
        console.log('\n2️⃣ Testing OTP verification...');
        const otpRes = await axios.post(`${BASE_URL}/api/auth/verify-otp`, {
            aadhar: testUser.aadhar,
            otp: registerRes.data.otp
        });
        
        console.log('✅ OTP verification successful!');
        
        // Test 3: Login
        console.log('\n3️⃣ Testing user login...');
        const loginRes = await axios.post(`${BASE_URL}/api/auth/login`, {
            aadhar: testUser.aadhar,
            password: testUser.password
        });
        
        console.log('✅ Login successful!');
        console.log('🔑 Token received');
        
        // Test 4: Cast vote
        console.log('\n4️⃣ Testing vote casting...');
        const voteRes = await axios.post(`${BASE_URL}/api/vote/cast`, {
            aadhar: testUser.aadhar,
            candidateId: 'candidate1'
        });
        
        console.log('✅ Vote cast successfully!');
        
        // Test 5: Check results
        console.log('\n5️⃣ Testing vote results...');
        const resultsRes = await axios.get(`${BASE_URL}/api/vote/results`);
        
        console.log('✅ Results retrieved successfully!');
        console.log('📊 Current results:', resultsRes.data.results);
        
        // Test 6: Admin login
        console.log('\n6️⃣ Testing admin login...');
        const adminRes = await axios.post(`${BASE_URL}/api/admin/login`, {
            username: 'mgm',
            password: 'maroof'
        });
        
        console.log('✅ Admin login successful!');
        
        // Test 7: Admin get users
        console.log('\n7️⃣ Testing admin user list...');
        const usersRes = await axios.get(`${BASE_URL}/api/admin/users`);
        
        console.log('✅ User list retrieved successfully!');
        console.log('👥 Total users:', usersRes.data.users.length);
        
        console.log('\n🎉 ALL TESTS PASSED! The voting system is working perfectly!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.response?.data?.message || error.message);
        console.log('\n📋 Error details:', error.response?.data || error.message);
    }
}

// Run the test
testCompleteFlow();