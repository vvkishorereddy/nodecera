const jobsModel = require("../Models/Jobs");
const companyModel = require("../Models/Company");
const JsonResponse = require("../Helpers/JsonResponse");
const { UPLOAD_PATH } = require("../Config");

const jobs = {};

jobs.get = (req, res) => {
  let regexValue = /.*/i;
  if (req.query.key) {
    regexValue = new RegExp(req.query.key, "i");
  }
  let whereCondition = {};
  whereCondition.title = { $regex: regexValue };
  if (res.locals.userId) {
    whereCondition.user = res.locals.userId;
  }

  jobsModel
    .find(whereCondition, (err, jobs) => {
      jobs.map(job => {
        job.company_logo = UPLOAD_PATH + job.company_logo;
      });
      res.json(JsonResponse.format(200, true, "Fetched Sucessfully", jobs));
    })
    .sort({ _id: -1 })
    .skip(parseInt(req.query.skip))
    .limit(parseInt(req.query.limit));
};

jobs.post = (req, res, next) => {
  const dataObject = req.body;

  // fetch company data
  companyModel.findOne({ user: res.locals.userId }, (err, data) => {
    dataObject.company_name = data.name;
    dataObject.company_logo = data.logo;
    dataObject.company_description = data.description;
    dataObject.company_address = data.address;
    dataObject.company_phone = data.phone;
    dataObject.company_email = data.email;
    dataObject.company_website = data.website;
    dataObject.user = data.user;

    jobsModel.create(dataObject, (err, jobs) => {
      if (err) return next();
      res.json(JsonResponse.format(200, true, "created Sucessfully", jobs));
    });
  });
};

jobs.singleJob = (req, res) => {
  jobsModel.findOne({ _id: req.params.id }, (err, data) => {
    data.company_logo = UPLOAD_PATH + data.company_logo;
    res.json(JsonResponse.format(200, true, "Fetched Sucessfully", data));
  });
};

jobs.delete = (req, res) => {
  jobsModel.deleteOne(
    { _id: req.params.postId, user: res.locals.userId },
    (err, data) => {
      console.log(err);
      res.json(JsonResponse.format(200, true, "deleted sucessfully", data));
    }
  );
};

module.exports = jobs;
