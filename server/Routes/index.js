const express = require("express");
const app = express();

const jobsRoutes = require("./Api/Jobs");
const resumeRoutes = require("./Api/Resume");

app.use("/jobs", jobsRoutes);
app.use("/resumes", resumeRoutes);

module.exports = app;
