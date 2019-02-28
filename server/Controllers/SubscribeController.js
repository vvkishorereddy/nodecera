const SubscribeModel = require("../Models/Subscriber");
const JsonResponse = require("../Helpers/JsonResponse");
const SubscribeController = {};

SubscribeController.post = (req, res) => {
  SubscribeModel.create({ email: req.body.email }, (err, data) => {
    res.json(JsonResponse.format(200, true, "Thanks for subscribing", data));
  });
};

module.exports = SubscribeController;
