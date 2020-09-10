const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
    name: { type: String, required: true },
    pseudo: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    list: { type: Array, required: true },
});

module.exports = mongoose.model('Channel', channelSchema);