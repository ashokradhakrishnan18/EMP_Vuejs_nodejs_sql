// var jwt = require('jsonwebtoken');
// const config = require('./jwtaccessdatabase');

// const verifyToken = (req, res, next) => {
//   const token = req.header("x-access-token");
//   if (!token) return res.status(401).json({ error: "Access denied" });
//   try {
//     const verified = jwt.verify(token, config.secretKey,
//           {
//                 algorithm: global.config.algorithm
//             });
//     req.user = verified;
//     next(); // to continue the flow
//   } catch (err) {
//     res.status(400).json({ error: "Token is not valid" });
//   }
// };
// module.exports = verifyToken;



var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const config = require("./jwtaccessdatabase");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};
module.exports = verifyToken;