const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String, required: true 
    },
  email: { 
    type: String, required: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], unique: true
    },
  auth: {
    type: String, required: true
  },
  date: {
    type: Date, default: Date.now
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;