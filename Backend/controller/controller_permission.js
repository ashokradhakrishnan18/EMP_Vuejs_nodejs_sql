const Getproduct = require("../model/model_permission.js");
console.log('controller');
exports.findOne =  (req, res) => {

     Getproduct.roleid (req.params.role,(err, data) => {
if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with id ${req.params.role}.`
        });
      } else {
         
        res.status(500).send({
          message: "Error retrieving with id " + req.params.role
        });
      }
     
    } else res.send(data);
  });
};