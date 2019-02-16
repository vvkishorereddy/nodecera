const passport = require("passport");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Config");

const User = require("../Models/User");

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
      const token = jwt.sign({ user: body }, JWT_SECRET);
      res.json({
        data: { access_token: token },
        status: true
      });
    });
  })(req, res, next);
};

login.getProfile = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, async (error, token) => {
    if (error || !token) {
      response.status(401).json({ message: "Unauthorized" });
    }
    try {
      const user = await User.findOne({
        where: { email: token.email }
      });
      request.user = user;
      response.json({
        status: 1,
        message: "logged in Sucessfully",
        token: user
      });
    } catch (error) {
      next(error);
    }
    next();
  })(request, response, next);
};

module.exports = login;
