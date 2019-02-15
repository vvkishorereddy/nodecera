const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  req.session.email = req.body.email;

  res.json({ status: 1, message: "Login Sucessfully" });
});

module.exports = router;
