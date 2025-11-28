const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const Vote = require('../models/vote');
const User = require('../models/user');

// Admin login (using fixed credentials)
router.post('/login', (req,res)=>{
    const { username, password } = req.body;
    if(username==='mgm' && password==='maroof'){
        return res.status(200).json({ message: 'Admin login successful' });
    } else {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
});

// Get vote results
router.get('/results', async (req,res)=>{
    try{
        const votes = await Vote.find();
        const results = {};
        votes.forEach(v=>{
            if(results[v.candidateId]) results[v.candidateId]++;
            else results[v.candidateId]=1;
        });
        res.status(200).json({results});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Server error'});
    }
});

// Get all users
router.get('/users', async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({users});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Server error'});
    }
});

module.exports = router;
