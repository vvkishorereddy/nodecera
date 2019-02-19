const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

// import local files
const { PORT, mongoDBUrl } = require("./server/Config");

const DB = require("./server/DB");
const apiRoutes = require("./server/Routes");

// app config
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// db connection
DB(mongoDBUrl);

// routes
app.use("/api", apiRoutes);
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
