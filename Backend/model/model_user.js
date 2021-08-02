const sql = require("../config/db.js");

// constructor
 function portaluser () {

};


portaluser.get =  ( result) => {
  sql.query("select * from tss.users",async (err, res) => {
     if (err) {
      result( await err, null);
      return;
    } 
    else  {
      result(null,await res);
      return;
    }
    
  });
};
portaluser.remove= (id, result) => {
  console.log(id)
  sql.query(`DELETE FROM tss.users WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

portaluser.edit = (id, Portaluser, result) => {
  sql.query("UPDATE tss.users SET empid = ?, username = ?, role = ? WHERE id = ?",[Portaluser.empid, Portaluser.username,Portaluser.role,id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
      console.log("updated customer: ", { id: id, ...Portaluser });
      result(null, { id: id, ...Portaluser });
  });
};
module.exports = portaluser