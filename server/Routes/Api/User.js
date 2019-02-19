const express = require("express");
const router = express.Router();

const loginController = require("../../Controllers/loginController");

router.get("/profile", loginController.getProfile);

module.exports = router;
