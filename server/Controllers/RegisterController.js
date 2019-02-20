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
const JsonResponse = require("../Helpers/JsonResponse");

const register = {};

register.post = (req, res, next) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    username: req.body.username,
    user_type: req.body.user_type
  };
  userModel.create(user, (err, data) => {
    //company data
    companyModel.create({ user: data._id }, (err, data) => {
      res.json(
        JsonResponse.format(200, true, "Account created Sucessfully", data)
      );
    });
  });
};

module.exports = register;
