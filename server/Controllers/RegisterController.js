const userModel = require("../Models/User");

const register = {};

register.post = (req, res, next) => {
  res.json({
    status: 1,
    message: "Account created Sucessfully",
    data: req.user
  });
};

module.exports = register;
