const mongoose = require("mongoose");

module.exports = function(mongoDBUrl) {
  mongoose.connect(mongoDBUrl, { useNewUrlParser: true }, err => {
    if (err) return console.log(err);
    else console.log("db connected");
  });
};
