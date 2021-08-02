
const sql = require("../config/db.js");

// constructor
 function Portalregister () {
  this.empid = portalregister.empid;
  this.username = portalregister.username;
  this.password = portalregister.password;
  this.role = portalregister.role;
};

Portalregister.register =  (portalregister, result) => {

  sql.query("select * from tss.users where username ='" + portalregister.username + "'",async (err, res) => {
    if (err) {
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
      result({message:"Username already exist"},null);
      return;
    }
    else {
      sql.query("insert into tss.users SET ?", portalregister, (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
       else if(res){
            result(null,'User Register Successfully...');
        return;
        }
      });
    }

  });


};


module.exports = Portalregister