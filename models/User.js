const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
    type: String, required: true 
    },
    title: {
      type: String, required: true
    },
    url: {
      type: String, required: true
    },
    author: {
      type: String, required: false
    },
    date: {
    type: Date, default: Date.now
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;