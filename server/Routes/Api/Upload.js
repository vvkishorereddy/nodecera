const express = require("express");
const router = express.Router();
const uploadController = require("../../Controllers/UploadController");
const uploadMiddleware = require("../../Middlewares/Upload");
const jwtVerifyMiddleware = require("../../Middlewares/Jwt");

router.post(
  "/",
  jwtVerifyMiddleware,
  uploadMiddleware.single("file"),
  uploadController.post
);

router.post(
  "/excel",
  jwtVerifyMiddleware,
  uploadMiddleware.single("file"),
  uploadController.bulkPost
);

module.exports = router;
