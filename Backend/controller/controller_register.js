const Portalregister = require("../model/model_register.js");

var jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


exports.register =  (req, res) => {
 var salt= bcrypt.genSalt(10)

const portalregister = {
  empid:req.body.empid,
  username: req.body.username,
  password:req.body.password,
  role:req.body.role
  }


 Portalregister.register(portalregister, async (err, data) => {

    if (err)
     await res.status(500).send({
        message: err.message || "Some error"
      });
    else {
 await res.send(data);({
    message:"Register SuccesFully..."
    });
    }
   
  });
};

