const util = require("util");
const multer = require("multer");
const maxSize = 5 * 1024 * 1024;
const path = require('path');

let storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, __basedir + "/Backend/assets/files/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname+ '-' + Date.now() + path.extname(file.originalname));
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;