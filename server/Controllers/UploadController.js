const Upload = require("../Models/Upload");
const JsonResponse = require("../Helpers/JsonResponse");
const { UPLOAD_PATH } = require("../Config");
const uploadController = {};

uploadController.post = (req, res) => {
  let file = {
    name: req.file.filename
  };

  let query = {};

  if (res.locals.userId) {
    query.user = res.locals.userId;
  }

  if (req.body.id) {
    query._id = req.body.id;
  }

  Upload.findOneAndUpdate(
    query,
    { $set: file },
    { new: true, upsert: true },
    (err, data) => {
      const filteredData = { ...data, name: UPLOAD_PATH + data.name };
      res.json(
        JsonResponse.format(
          200,
          true,
          "Image uploaded sucessfully",
          filteredData
        )
      );
    }
  );
};

module.exports = uploadController;
