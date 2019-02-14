const express = require("express");
const app = express();
const path = require("path");
const { PORT } = require("./server/Config");

const apiRoutes = require("./server/Routes");

app.use(express.static(path.join(__dirname, "public")));

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
