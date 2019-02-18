const passport = require("passport");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Config");

const User = require("../Models/User");
const JsonResponse = require("../Helpers/JsonResponse");

const login = {};

login.post = (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err || !user) {
      return res
        .status(200)
        .json(JsonResponse.format(401, false, "Authentication Failed", null));
    }
    req.login(user, { session: false }, error => {
      if (error) {
        return res
          .status(200)
          .json(JsonResponse.format(401, false, error, null));
      }

      const body = { _id: req.user._id, email: req.user.email };
      const token = jwt.sign({ user: body }, JWT_SECRET);
      res.json(
        JsonResponse.format(200, true, "Created Sucessfully", {
          access_token: token
        })
      );
    });
    next();
  })(req, res, next);
};

login.getProfile = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, async (error, token) => {
    if (error || !token) {
      response
        .status(200)
        .json(JsonResponse.format(401, false, "Unauthorized", null));
    } else {
      try {
        const user = await User.findOne({
          where: { email: token.email }
        });
        request.user = user;
        response.json(
          JsonResponse.format(200, true, "logged in Sucessfully", {
            token: user
          })
        );
        next();
      } catch (error) {
        next(error);
      }
    }
  })(request, response, next);
};

module.exports = login;
