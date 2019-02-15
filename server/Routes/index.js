const express = require("express");
const app = express();

const jobsRoutes = require("./Api/Jobs");
const resumeRoutes = require("./Api/Resume");
const subscribeRoutes = require("./Api/Subscribe");
const registerRoutes = require("./Api/Register");
const loginRoutes = require("./Api/Login");
app.use("/jobs", jobsRoutes);
app.use("/resumes", resumeRoutes);
app.use("/subscribe", subscribeRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

module.exports = app;
