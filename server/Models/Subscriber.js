const mongoose = require("mongoose");
const { Schema } = mongoose;

let SubscribeSchema = new Schema({
  email: {
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

module.exports = mongoose.model("Subscriber", SubscribeSchema);
