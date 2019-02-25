const companyModel = require("../Models/Company");
const uploadModel = require("../Models/Upload");
const JsonResponse = require("../Helpers/JsonResponse");
const { UPLOAD_PATH } = require("../Config");
const CompanyController = {};

CompanyController.post = async (req, res) => {
  const data = req.body;
  if (res.locals.userId) {
    data.user = res.locals.userId;
  }
  console.log(data);
  const result = await companyModel.create(data);
  res.json(JsonResponse.format(200, true, "Updated Sucessfully", result));
};

CompanyController.getLogo = async (req, res) => {
  const result = await uploadModel.findOne({ user: res.locals.userId });
  result.name = UPLOAD_PATH + result.name;
  res.json(JsonResponse.format(200, true, "Image Fetched Sucessfully", result));
};

CompanyController.get = async (req, res) => {
  const result = await companyModel.findOne({ user: res.locals.userId });
  res.json(
    JsonResponse.format(200, true, "Company Data Fetched Sucessfully", result)
  );
};

module.exports = CompanyController;
