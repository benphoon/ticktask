const mongoose = require('mongoose');

// Schemas describe how the data looks
const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Task', TaskSchema);