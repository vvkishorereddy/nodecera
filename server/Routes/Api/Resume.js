const express = require("express");
const router = express.Router();

const resumeController = require("../../Controllers/ResumeController");

router.get("/", resumeController.get);

module.exports = router;
