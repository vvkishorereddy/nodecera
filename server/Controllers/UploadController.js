const XLSX = require("xlsx");
const Upload = require("../Models/Upload");
const CompanyModel = require("../Models/Company");
const jobsModel = require("../Models/Jobs");
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

  Upload.findOneAndUpdate(
    query,
    { $set: file },
    { new: true, upsert: true },
    (err, data) => {
      // update logo in company data
      CompanyModel.findOneAndUpdate(
        query,
        { $set: { logo: req.file.filename } },
        { new: true, upsert: true },
        (err, data) => {
          data.logo = UPLOAD_PATH + data.logo;
          res.json(
            JsonResponse.format(200, true, "Image uploaded sucessfully", data)
          );
        }
      );
    }
  );
};

uploadController.bulkPost = async (req, res) => {
  let file = {
    name: req.file.filename
  };

  var workbook = XLSX.readFile(`public/images/uploads/${req.file.filename}`);
  var worksheet = workbook.Sheets["Sheet1"];

  var headers = {};
  var data = [];
  for (z in worksheet) {
    if (z[0] === "!") continue;
    //parse out the column, row, and value
    var col = z.substring(0, 1);
    var row = parseInt(z.substring(1));
    var value = worksheet[z].v;

    //store header names
    if (row == 1) {
      headers[col] = value;
      continue;
    }
    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();

  // fetch company data
  const companyData = await CompanyModel.findOne({ user: res.locals.userId });

  data.map(row => {
    row["user"] = res.locals.userId;
    row["company_name"] = companyData.name;
    row["company_logo"] = companyData.logo;
    row["company_description"] = companyData.description;
    row["company_address"] = companyData.address;
    row["company_phone"] = companyData.phone;
    row["company_email"] = companyData.email;
    row["company_website"] = companyData.website;
    return row;
  });

  jobsModel.create(data, (err, jobs) => {
    if (err) return next();
    res.json(JsonResponse.format(200, true, "created Sucessfully", jobs));
  });
};

module.exports = uploadController;
