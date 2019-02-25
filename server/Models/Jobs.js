const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  workType: String,
  location: String,
  category: String,
  salary: String,
  summary: String,
  responsibilities: String,
  requirements: String,
  experience: String,
  company_name: String,
  company_logo: String,
  company_description: String,
  company_address: String,
  company_phone: String,
  company_email: String,
  company_website: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  last_date: Date,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model("Jobs", JobSchema);
