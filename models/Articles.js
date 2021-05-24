const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  date: {
    type: Date, default: Date.now
  },
  title: {
    type: String, 
    required: true,
    unique: false
  },
  url: {
    type: String, 
    required: true,
    unique: false
  },
  author: {
    type: String, 
    required: false,
    unique: false
  },
  user: {
    type: String,
    required: true,
    unique: false
  }, 
  image: {
    type: String,
    required: false,
    unique: false
  }
})

const User = mongoose.model('Articles', articleSchema);

module.exports = User;