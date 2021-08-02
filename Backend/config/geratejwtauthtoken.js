var jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
global.config = require('./jwtaccessdatabase');


   const gerateAuthToken=login=>      
    {
    console.log( 'token generated' ); 
    const token=jwt.sign({
    id:login.id,
    email:login.email
    }, 
     
    global.config.secretKey,
    {
        algorithm: 'HS256',
        // expiresIn: '12hrs'
       expiresIn: 43200
    }
);
    return token
}



module.exports.gerateAuthToken=gerateAuthToken; 

    