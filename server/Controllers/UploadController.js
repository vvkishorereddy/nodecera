const Upload = require("../Models/Upload");
const CompanyModel = require("../Models/Company");
const JsonResponse = require("../Helpers/JsonResponse");
const { UPLOAD_PATH } = require("../Config");
const uploadController = {};

uploadController.post = (req, res) => {
  let file = {
    name: req.file.filename
  };

  let query = {};

  if (res.locals.userId) {
    query.user = res.locals.userId;
  }

  Upload.findOneAndUpdate(
    query,
    { $set: file },
    { new: true, upsert: true },
    (err, data) => {
      // update logo in company data
      CompanyModel.findOneAndUpdate(
        query,
        { $set: { logo: req.file.filename } },
        { new: true, upsert: true },
        (err, data) => {
          data.logo = UPLOAD_PATH + data.logo;
          res.json(
            JsonResponse.format(200, true, "Image uploaded sucessfully", data)
          );
        }
      );
    }
  );
};

module.exports = uploadController;
