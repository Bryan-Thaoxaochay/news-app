const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    date: {
        type: Date, default: Date.now
    },
    user: {
        type: String,
        required: true,
        unique: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    comment: {
        type: String,
        required: true,
        unique: false
    }
})

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;