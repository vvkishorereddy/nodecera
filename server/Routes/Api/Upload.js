const express = require("express");
const router = express.Router();

const uploadMiddleware = require("../../Middlewares/Upload");
const uploadController = require("../../Controllers/UploadController");

router.post("/", uploadMiddleware.single("file"), uploadController.post);

module.exports = router;
