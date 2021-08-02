const portaluser = require("../model/model_user.js");
console.log('controller');

exports.get =  (req, res) => {
     portaluser.get ((err, data) => {
if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving"
        });
      }
    } else res.send(data);
  });
};

exports.deleteuser = (req, res) => {
 console.log(req.params.id)
  portaluser.remove(req.params.id, (err, data) => {
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
    } else res.send({ message: `User was deleted successfully!` });
  });
};

exports.updateuser = (req, res) => {
const Portaluser = {
  empid:req.body.empid,
  username: req.body.username,
  role: req.body.role
  }
  portaluser.edit(req.params.id, Portaluser,(err, data) => {
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