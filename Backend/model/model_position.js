const sql = require("../config/db.js");


 function getposition () {
  this.role = getposition.role;
  this.position = getposition.position;
};

 getposition.findOne =  (role, result) => {
  sql.query(`select * from tss.roles where role = ${role}`, async (err, res) => {
 if (err) {
    await  result(err, null);
      return;
    }

    if (res.length) {
    await  result(null, res);
      return;
    }
  await  result({ kind: "not_found" }, null);
  });
};



 getposition.findAll =  ( result) => {
  sql.query(`select * from tss.roles`, async (err, res) => {
 if (err) {
    await result(err, null);
      return;
    }
    if (res.length) {
    await result(null, res);
      return;
    }
  await  result({ kind: "not_found" }, null);
  });
};


getposition.addByRole =  (getposition, result) => {
  sql.query("select * from tss.roles where role ='" + getposition.role + "'",async (err, res) => {
    if (err) {
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
      result({message:"Role already exist"},null);
      return;
    }
    else {
 sql.query("insert into tss.roles SET ?", getposition, (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
       else if(res){
            result(null,'Role Inserted Successfully...');
        return;
        }
      });
    }

  });
};

getposition.remove = (id, result) => {
  sql.query(`DELETE FROM tss.roles WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

getposition.edit = (id, getposition, result) => {
  sql.query("UPDATE tss.roles SET role = ?, position = ? WHERE id = ?",[getposition.role, getposition.position,id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
      console.log("updated customer: ", { id: id, ...getposition });
      result(null, { id: id, ...getposition });
  });
};
module.exports = getposition;
