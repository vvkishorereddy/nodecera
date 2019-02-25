const express = require("express");
const router = express.Router();

const jobsController = require("../../Controllers/JobsController");
const jwtVerifyMiddleware = require("../../Middlewares/Jwt");

router.get("/", jobsController.get);
router.post("/", jwtVerifyMiddleware, jobsController.post);
router.get("/:id", jobsController.singleJob);

module.exports = router;
