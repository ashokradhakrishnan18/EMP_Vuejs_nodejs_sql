const sql = require("../config/db.js");

// constructor
 function Portallogin () {
  this.username = portallogin.username;
  this.password = portallogin.password;
};


Portallogin.login =  (portallogin, result) => {

  sql.query("select * from tss.users where username ='" + portallogin.username + "'",async (err, res) => {

     if (err) {
      result( await err, null);
      return;
    } 
    else  {
      result(null,await res[0]);
      return;
    }
    
  });
};


module.exports = Portallogin