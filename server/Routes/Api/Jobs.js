const express = require("express");
const router = express.Router();

const jobsController = require("../../Controllers/JobsController");
const jwtVerifyMiddleware = require("../../Middlewares/Jwt");

router.get("/", jobsController.get);
router.post("/", jwtVerifyMiddleware, jobsController.post);
router.delete("/:postId", jwtVerifyMiddleware, jobsController.delete);
router.get("/active", jwtVerifyMiddleware, jobsController.get);
router.get("/archive", jwtVerifyMiddleware, jobsController.get);
router.get("/:id", jobsController.singleJob);

module.exports = router;
