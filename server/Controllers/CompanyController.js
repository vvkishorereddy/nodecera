const companyModel = require("../Models/Company");
const uploadModel = require("../Models/Upload");
const JsonResponse = require("../Helpers/JsonResponse");
const { UPLOAD_PATH } = require("../Config");
const CompanyController = {};

CompanyController.post = (req, res) => {
  const companyData = req.body;
  let query = {};
  if (res.locals.userId) {
    query.user = res.locals.userId;
  }
  companyData.updated_at = Date.now();

  companyModel.findOneAndUpdate(
    query,
    { $set: companyData },
    { new: true, upsert: true },
    (err, data) => {
      res.json(JsonResponse.format(200, true, "Updated Sucessfully", data));
    }
  );
};

CompanyController.getLogo = async (req, res) => {
  const result = await uploadModel.findOne({ user: res.locals.userId });
  result.name = UPLOAD_PATH + result.name;
  res.json(JsonResponse.format(200, true, "Image Fetched Sucessfully", result));
};

CompanyController.get = async (req, res) => {
  const result = await companyModel.findOne({ user: res.locals.userId });
  result["logo"] = UPLOAD_PATH + result.logo;
  res.json(
    JsonResponse.format(200, true, "Company Data Fetched Sucessfully", result)
  );
};

module.exports = CompanyController;
