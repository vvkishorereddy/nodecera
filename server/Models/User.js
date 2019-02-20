const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.statics.checkPassword = function(inputPassword, dbPassword) {
  if (inputPassword === dbPassword) return true;
  return false;

  console.log(inputPassword, dbPassword, "in db");
  try {
    return bcrypt.compare(inputPassword, dbPassword);
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
UserSchema.methods.hashPassword = function(password) {
  return password;
  return bcrypt.hash(password, 10);
};

UserSchema.pre("save", function(next) {
  this.password = this.hashPassword(this.password);
  next();
});

module.exports = mongoose.model("User", UserSchema);
