const { type } = require('@testing-library/user-event/dist/cjs/utility/type.js');
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  //userId: mongoose.Schema.Types.ObjectId,
  content: {
    type: String,
    required: true

  },
  timestamp: { type: Date, default: Date.now },
  img:{
    type: String

  }
  
});

module.exports = mongoose.model('Post', PostSchema);
