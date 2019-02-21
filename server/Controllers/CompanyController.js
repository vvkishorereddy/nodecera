const companyModel = require("../Models/Company");
const JsonResponse = require("../Helpers/JsonResponse");
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

module.exports = CompanyController;
