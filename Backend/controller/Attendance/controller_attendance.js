const Attendance = require("../../model/Attendance/model_attendance");

exports.postattendance =  ( req,res) => {
const postattendance = {
  emp_id:req.body.emp_id,
  emp_name: req.body.emp_name,
  date:req.body.date,
  checkin: req.body.checkin,
  }
 Attendance.addByRole( postattendance,async (err, data) => {
    if (err)
     await res.status(404).send({
        message: err.message || "Some error"
      });
    else { 
await res.send(data);({
        message:"Check-In SuccesFully..."
        });
    }
        
  });
};

exports.editattendance = (req, res) => {
const editattendance = {
  date:req.body.date,
  checkout: req.body.checkout,
  department: req.body.department,
  emp_id:req.body.emp_id,
  task:req.body.task,
  total: req.body.total,
}
  Attendance.edit(req.params.emp_id, editattendance,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Checkout with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not Checkout with id " + req.params.id
        });
      }
    }  else res.send(data);

  });
};

exports.findAll =  ( req,res) => {
 
 Attendance.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    else res.send(data);
  });   
};


exports.findOne =  (req, res) => {

     Attendance.findOne (req.params.emp_id,req.params.date, (err, data) => {
  if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with role ${req.params.emp_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with role " + req.params.emp_id
        });
      }
    } else res.send(data);
  });      
};

exports.findbyDate =  (req, res) => {

     Attendance.findbyDate (req.params.date, (err, data) => {
  if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with role ${req.params.date}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with role " + req.params.date
        });
      }
    } else res.send(data);
  });      
};

exports.deleteattendance = (req, res) => {
  Attendance.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.id
        });
      }
    } else res.send({ message: `User Role was deleted successfully!` });
  });
};



