require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  mongoDBUrl: `mongodb://careersera:${encodeURIComponent(
    `VKr@1987`
  )}@ds135305.mlab.com:35305/careersera`,
  JWT_SECRET: process.env.JWT_SECRET
};
