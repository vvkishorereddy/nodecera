const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images/uploads");
  },
  filename: function(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const modifiedName =
      fileArray[0].replace(" ", "_") + "_" + Date.now() + "." + fileArray[1];
    cb(null, modifiedName);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
