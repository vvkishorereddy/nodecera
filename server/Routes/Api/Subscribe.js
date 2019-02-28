const express = require("express");
const router = express.Router();

const SubscribeController = require("../../Controllers/SubscribeController");

router.post("/", SubscribeController.post);
module.exports = router;
