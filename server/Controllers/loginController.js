const jwt = require("jsonwebtoken");

const login = {};

login.post = (req, res, next) => {
  console.log("controller");
  const body = { _id: req.user._id, email: req.user.email };

  const token = jwt.sign({ user: body }, "top_secret");

  res.json({
    token: token
  });
};

login.getProfile = (req, res) => {
  res.json({
    status: 1,
    message: "logged in Sucessfully",
    token: req.user
  });
};

module.exports = login;
