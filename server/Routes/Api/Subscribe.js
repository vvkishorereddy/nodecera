const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  res.json({
    status: 1,
    message: "Thanks for subscribing",
    data: req.body.email
  });
});
module.exports = router;