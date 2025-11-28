const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Vote = require('../models/vote');

// Cast vote
router.post('/cast', async (req,res)=>{
    const { aadhar, candidateId } = req.body;

    try{
        const user = await User.findOne({aadhar});
        if(!user) return res.status(400).json({message:'User not found'});
        // No OTP verification check needed
        if(user.hasVoted) return res.status(400).json({message:'Already voted'});

        const vote = new Vote({candidateId, aadhar});
        await vote.save();

        user.hasVoted = true;
        await user.save();

        res.status(200).json({message:'Vote cast successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Server error'});
    }
});

// Get vote count for all candidates
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

module.exports = router;
