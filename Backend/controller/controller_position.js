const con = require("../config/db.js");
const Getposition = require("../model/model_position.js");



exports.findOne =  (req, res) => {

     Getposition.findOne (req.params.role, (err, data) => {
if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with role ${req.params.role}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with role " + req.params.role
        });
      }
    } else res.send(data);
  });      
};

exports.findAll =  ( req,res) => {
 
 Getposition.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    else res.send(data);
  });   
};

exports.addByRole =  ( req,res) => {
const getposition = {
  role:req.body.role,
  position: req.body.position,
  }
 Getposition.addByRole( getposition,async (err, data) => {
    if (err)
     await res.status(404).send({
        message: err.message || "Some error"
      });
    else { 
await res.send(data);({
        message:"Register SuccesFully..."
        });
    }
        
  });
};

exports.deleterole = (req, res) => {
 console.log(req.params.id)
  Getposition.remove(req.params.id, (err, data) => {
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

exports.editrole = (req, res) => {
const getposition = {
  role:req.body.role,
  position: req.body.position,
  }
  Getposition.edit(req.params.id, getposition,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not edit Customer with id " + req.params.id
        });
      }
    }  else res.send(data);

  });
};

