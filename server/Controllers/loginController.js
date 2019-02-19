const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Config");
const JsonResponse = require("../Helpers/JsonResponse");
const userModel = require("../Models/User");

const login = {};

login.post = (req, res, next) => {
  userModel.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      console.log(err, user, 65);
      if (err || !user) {
        return res
          .status(200)
          .json(
            JsonResponse.format(401, false, "Authentication Failedv", null)
          );
      }

      if (
        //user.password != userModel.checkPassword(password, user.password)
        user.password != req.body.password
      ) {
        return res
          .status(200)
          .json(JsonResponse.format(401, false, "Password Failed", null));
      }

      const body = { _id: user._id, email: user.email };
      const token = jwt.sign({ user: body }, JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.json(
        JsonResponse.format(200, true, "Logged in Sucessfully", {
          access_token: token
        })
      );
    }
  );
};

login.getProfile = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, JWT_SECRET, function(err, decoded) {
    if (err)
      return res
        .status(200)
        .json(
          JsonResponse.format(401, false, "Failed to authenticate token.", null)
        );
    res
      .status(200)
      .json(
        JsonResponse.format(401, false, "Authentication Succeess", decoded.user)
      );
  });
};

module.exports = login;
