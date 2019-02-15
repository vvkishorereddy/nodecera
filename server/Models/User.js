const mongoose = require("mongoose");
const { Schema } = mongoose;

let UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
