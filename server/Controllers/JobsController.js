const jobsModel = require("../Models/Jobs");
const jobs = {};

jobs.get = (req, res) => {
  jobsModel.find((err, jobs) => {
    res.json(jobs);
  });
};

module.exports = jobs;
