const express = require("express");
const router = express.Router();

const jobsController = require("../../Controllers/JobsController");

router.get("/", jobsController.get);
router.post("/", jobsController.post);

module.exports = router;
