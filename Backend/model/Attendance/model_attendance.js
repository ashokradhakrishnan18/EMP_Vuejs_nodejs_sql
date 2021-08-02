const sql = require("../../config/db.js");


 function Attendance () {
  this.emp_id = Attendance.emp_id;
  this.emp_name = Attendance.emp_name;
  this.date = Attendance.date;
  this.checkin = Attendance.checkin;
};

 Attendance.findOne =  (id,date, result) => {
  console.log(id)
  console.log(date)
  sql.query("select * from tss.attendance_report where emp_id ='" + id + "'and date='" + date + "'",async (err, res) => {
 if (err) {
     console.log(err)
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

 Attendance.findbyDate =  (date, result) => {
  console.log(date)
  sql.query("select * from tss.attendance_report where date='" + date + "'",async (err, res) => {
 if (err) {
     console.log(err)
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


 Attendance.findAll =  ( result) => {
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


Attendance.addByRole =  (Attendance, result) => {
  sql.query("select * from tss.attendance_report where date ='" + Attendance.date + "'and emp_id='" +Attendance.emp_id+ "'",async (err, res) => {
    if (err) {
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
      result({message:"Already Checkin"},null);
      return;
    }
    else {
 sql.query("insert into tss.attendance_report SET ?", Attendance, (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
       else if(res){
            result(null,'Check-In Succesfully..');
        return;
        }
      });
    }

  });
};

Attendance.remove = (id, result) => {
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

Attendance.edit = (emp_id, editattendance, result) => {
  sql.query("UPDATE tss.attendance_report SET checkout = ?, total = ?, department = ?, task = ? WHERE emp_id = ? and date = ?",[editattendance.checkout, editattendance.total,editattendance.department,editattendance.task,emp_id,editattendance.date], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    } console.log(res)
      result(null,'Check-Out Succesfully..');
  });
};
module.exports = Attendance;
