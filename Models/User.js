const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  email: String,
  gender: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
