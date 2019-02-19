const jobsModel = require("../Models/Jobs");
const JsonResponse = require("../Helpers/JsonResponse");
const jobs = {};

jobs.get = (req, res) => {
  jobsModel.find((err, jobs) => {
    res.json(JsonResponse.format(200, true, "Fetched Sucessfully", jobs));
  });
};

jobs.post = (req, res) => {
  jobsModel.create(req.body, (err, jobs) => {
    if (err) return next();
    res.json(JsonResponse.format(200, true, "created Sucessfully", jobs));
  });
};

module.exports = jobs;
