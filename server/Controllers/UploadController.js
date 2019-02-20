const Upload = require("../Models/Upload");
const JsonResponse = require("../Helpers/JsonResponse");
const uploadController = {};

uploadController.post = (req, res) => {
  let file = {
    name: req.file.filename
  };

  let query = {};
  if (req.body.id) {
    query._id = req.body.id;
  }

  Upload.findOneAndUpdate(
    query,
    { $set: file },
    { new: true, upsert: true },
    (err, data) => {
      res.json(
        JsonResponse.format(200, true, "Image uploaded sucessfully", data)
      );
    }
  );
};

module.exports = uploadController;
