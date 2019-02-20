const mongoose = require("mongoose");
const { Schema } = mongoose;

let uploadSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: Boolean, default: 1 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Upload", uploadSchema);
