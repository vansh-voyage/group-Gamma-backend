const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  Bio:{
    type: String,
  }

});

module.exports = mongoose.model('User', UserSchema);
