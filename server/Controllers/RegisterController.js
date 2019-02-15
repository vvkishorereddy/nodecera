const bcryptjs = require("bcryptjs");
const userModel = require("../Models/User");

const register = {};

function checkPassword(inputPassword, storedPassword) {
  return bcryptjs.compareSync(inputPassword, storedPassword);
}

function hashPassword(password) {
  return bcryptjs.hashSync(password);
}

register.post = (req, res, next) => {
  let user = {
    email: req.body.email,
    password: hashPassword(req.body.password),
    fullname: req.body.fullname,
    username: req.body.username,
    user_type: req.body.user_type
  };
  userModel.create(user, (err, data) => {
    if (err) return next();
    res.json({
      status: 1,
      message: "Account created Sucessfully",
      data: data
    });
  });
};

module.exports = register;
