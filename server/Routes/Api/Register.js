const express = require("express");
const router = express.Router();
const passport = require("passport");

const registerController = require("../../Controllers/RegisterController");

router.post(
  "/",
  passport.authenticate("signup", { session: false }),
  registerController.post
);

module.exports = router;
