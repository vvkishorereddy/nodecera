const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JobSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Jobs", JobSchema);
