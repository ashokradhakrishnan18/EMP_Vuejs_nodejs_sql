const sql = require("../config/db.js");

 function Getposition () {

};

 Getposition.roleid =  (role, result) => {
  sql.query(`select * from tss.permissionaccess where role = ${role}`, async (err, res) => {
 if (err) {
    await  result(err, null);
      return;
    }

    if (res.length) {
    await  result(null, res);
      return;
    }
    // not found Customer with the id
  await  result({ kind: "not_found" }, null);
  });
};


module.exports = Getposition;