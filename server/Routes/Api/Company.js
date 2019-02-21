const express = require("express");
const router = express.Router();
const jwtVerifyMiddleware = require("../../Middlewares/Jwt");
const CompanyController = require("../../Controllers/CompanyController");

router.post("/", jwtVerifyMiddleware, CompanyController.post);

module.exports = router;
