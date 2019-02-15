const express = require("express");
const app = express();

const jobsRoutes = require("./Api/Jobs");
const resumeRoutes = require("./Api/Resume");
const subscribeRoutes = require("./Api/Subscribe");
app.use("/jobs", jobsRoutes);
app.use("/resumes", resumeRoutes);
app.use("/subscribe", subscribeRoutes);

module.exports = app;
