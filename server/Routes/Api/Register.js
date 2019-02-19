const express = require("express");
const router = express.Router();

const registerController = require("../../Controllers/RegisterController");

router.post("/", registerController.post);

module.exports = router;
