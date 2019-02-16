const express = require("express");
const router = express.Router();
const passport = require("passport");

const loginController = require("../../Controllers/loginController");

router.post(
  "/",
  passport.authenticate("login", { session: false }),
  loginController.post
);

module.exports = router;
