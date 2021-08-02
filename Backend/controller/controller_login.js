
const Portallogin = require("../model/model_login.js");
const geratejwtauthtoken=require("../config/geratejwtauthtoken")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");



exports.login =  (req, res) => {

const portallogin = {
    username:req.body.username,
    password:req.body.password, 
};


  Portallogin.login(portallogin, async (err, data) => {
    if (err)
    {
        await res.status(400).send({
            message:
              err.message || "Some error occurred."
          });
    }
    else if(data)
    {      
                  if(req.body.password==data.password){ 
                    console.log(data)
                    const token=await geratejwtauthtoken.gerateAuthToken(data)
                    // generate an access token
                    return res.status(200).send({
                    User:data,
                    status:true,
                    token : token
                    });
                  }
              else{
                      return res.status(400).send({
                  message: 'User Name and Password does not match...'
                });
                 }
              }   
    else{
          await res.status(400).send({
              status:false,    
            message:"Email does not exits"
          });
        }
  });
};

