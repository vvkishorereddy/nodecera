const userModel = require("../Models/User");
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
    console.log(err);
    res.json(
      JsonResponse.format(200, true, "Account created Sucessfully", {
        data: data
      })
    );
  });
};

module.exports = register;
