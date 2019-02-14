const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { PORT } = require("./server/Config");

const mongoUrl = `mongodb://careersera:${encodeURIComponent(
  `VKr@1987`
)}@ds135305.mlab.com:35305/careersera`;

mongoose.connect(mongoUrl, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const apiRoutes = require("./server/Routes");
app.use("/api", apiRoutes);

//  /^\/?/
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(PORT);
});
