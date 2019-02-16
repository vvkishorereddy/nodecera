const express = require("express");
const router = express.Router();

const loginController = require("../../Controllers/loginController");
router.post("/", loginController.post);
module.exports = router;
