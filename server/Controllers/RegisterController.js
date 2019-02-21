/**
 * while register
 *  update db
 * user,company
 *
 *
 *
 */

const userModel = require("../Models/User");
const companyModel = require("../Models/Company");
const uploadModel = require("../Models/Upload");
const JsonResponse = require("../Helpers/JsonResponse");

const register = {};

register.post = async (req, res, next) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    username: req.body.username,
    user_type: req.body.user_type
  };
  let userData, companyData, uploadData;
  try {
    userData = await userModel.create(user);
  } catch (e) {
    let message = e._message != "" ? e._message : "User not created";
    return res.json(JsonResponse.format(401, false, message, null));
  }

  try {
    companyData = await companyModel.create({ user: userData._id });
  } catch (e) {
    let message = e._message != "" ? e._message : "company not created";
    return res.json(JsonResponse.format(401, false, message, null));
  }
  try {
    uploadData = await uploadModel.create({ user: userData._id });
  } catch (error) {
    let message = e._message != "" ? e._message : "upload row not created";
    return res.json(JsonResponse.format(401, false, message, null));
  }

  res.json(
    JsonResponse.format(200, true, "Account created Sucessfully", userData)
  );

  return;
};

module.exports = register;
