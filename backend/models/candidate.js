const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    taluka: {
        type: String,
        required: true
    },
    constituency: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    alliance: {
        type: String,
        required: true
    },
    mlaStatus: {
        type: String,
        default: 'New Candidate'
    },
    position: {
        type: String,
        default: ''
    },
    details: {
        type: String,
        default: ''
    },
    addedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Candidate', candidateSchema);
