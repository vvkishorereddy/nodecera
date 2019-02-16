const express = require("express");
const router = express.Router();
const passport = require("passport");

const loginController = require("../../Controllers/loginController");

router.get(
  "/profile",
  // passport.authenticate("jwt", { session: false }),
  loginController.getProfile
);

module.exports = router;
