const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');

// Add new candidate (Admin only)
router.post('/add-candidate', async (req, res) => {
    try {
        const { name, district, taluka, constituency, party, alliance, mlaStatus, position, details } = req.body;

        // Validate required fields
        if (!name || !district || !taluka || !constituency || !party || !alliance) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        const newCandidate = new Candidate({
            name,
            district,
            taluka,
            constituency,
            party,
            alliance,
            mlaStatus: mlaStatus || 'New Candidate',
            position: position || '',
            details: details || ''
        });

        await newCandidate.save();
        res.status(201).json({ message: 'Candidate added successfully', candidate: newCandidate });
    } catch (error) {
        console.error('Error adding candidate:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all candidates
router.get('/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find().sort({ addedDate: -1 });
        res.status(200).json({ candidates });
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get candidates by district
router.get('/candidates/district/:district', async (req, res) => {
    try {
        const { district } = req.params;
        const candidates = await Candidate.find({ district });
        res.status(200).json({ candidates });
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get candidates by district and taluka
router.get('/candidates/district/:district/taluka/:taluka', async (req, res) => {
    try {
        const { district, taluka } = req.params;
        const candidates = await Candidate.find({ district, taluka });
        res.status(200).json({ candidates });
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete candidate (Admin only)
router.delete('/delete-candidate/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Candidate.findByIdAndDelete(id);
        res.status(200).json({ message: 'Candidate deleted successfully' });
    } catch (error) {
        console.error('Error deleting candidate:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update candidate (Admin only)
router.put('/update-candidate/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        const updatedCandidate = await Candidate.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json({ message: 'Candidate updated successfully', candidate: updatedCandidate });
    } catch (error) {
        console.error('Error updating candidate:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
