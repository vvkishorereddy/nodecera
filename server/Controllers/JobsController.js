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

jobs.singleJob = (req, res) => {
  jobsModel.findOne({ _id: req.params.id }, (err, data) => {
    res.json(JsonResponse.format(200, true, "Fetched Sucessfully", data));
  });
};

module.exports = jobs;
