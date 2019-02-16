const jobsModel = require("../Models/Jobs");
const jobs = {};

jobs.get = (req, res) => {
  console.log(req.user);
  jobsModel.find((err, jobs) => {
    res.json(jobs);
  });
};

jobs.post = (req, res) => {
  let job = new jobsModel({
    title: req.body.title
  });
  job.save(err => {
    if (err) return next();
    res.json({ status: "created sucessfully" });
  });
};

module.exports = jobs;
