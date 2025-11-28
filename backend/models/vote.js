const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    candidateId: String,
    aadhar: String,  // user who voted
});

module.exports = mongoose.model('Vote', voteSchema);
