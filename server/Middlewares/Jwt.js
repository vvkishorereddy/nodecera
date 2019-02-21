const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Config");

const tokenVerify = async (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });
  const decodedToken = await jwt.verify(token, JWT_SECRET);
  res.locals.userId = decodedToken.user._id;
  next();
};

module.exports = tokenVerify;
