const mongoose = require("mongoose");
const { Schema } = mongoose;

let CompanySchema = new Schema({
  name: String,
  logo: String,
  description: String,
  address: String,
  phone: String,
  email: String,
  website: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  status: Boolean,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Company", CompanySchema);
