const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String, 
    lowercase: true
  },
  email: {
    type: String, 
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String
  }

},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);