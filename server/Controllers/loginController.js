const passport = require("passport");
const jwt = require("jsonwebtoken");

const login = {};

login.post = (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err || !user) {
      return res.status(200).json({
        error: "Authentication Failed",
        status: false
      });
    }
    req.login(user, { session: false }, error => {
      if (error) {
        return res.status(200).json({
          error: error,
          status: false
        });
      }

      const body = { _id: req.user._id, email: req.user.email };
      const token = jwt.sign({ user: body }, "top_secret");
      res.json({
        data: { access_token: token },
        status: true
      });
    });
  })(req, res, next);
};

login.getProfile = (req, res) => {
  res.json({
    status: 1,
    message: "logged in Sucessfully",
    token: req.user
  });
};

module.exports = login;
