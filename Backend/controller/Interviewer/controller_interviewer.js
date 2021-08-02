const Portalinterviewer = require("../../model/Interviewer/model_interviewer.js");

exports.addByOne =  ( req,res) => {
const portalinterviewer = {
  Mainid:req.body.Mainid,
  Process: req.body.Process,
  Remark:req.body.Remark,
  Mode:req.body.Mode,
  Result:req.body.Result
  }
 Portalinterviewer.addByOne( portalinterviewer,async (err, data) => {
    if (err)
     await res.status(404).send({
        message: err.message || "Some error"
      });
    else { 
        await res.send(data);({
        message:"Interviewer Added SuccesFully..."
        });
    }
        
  });
};

exports.findOne =  (req, res) => {
     Portalinterviewer.findOne (req.params.Mainid, (err, data) => {
if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with MainId ${req.params.Mainid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with MainId " + req.params.Mainid
        });
      }
    } else res.send(data);
  });      
};

exports.findAll =  ( req,res) => {
 
 Portalinterviewer.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    else res.send(data);
  });  
};

exports.deleteOne = (req, res) => {
 console.log(req.params.Mainid)
  Portalinterviewer.remove(req.params.Mainid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Interviewer with Mainid ${req.params.Mainid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Interviewer with Mainid " + req.params.Mainid
        });
      }
    } else res.send({ message: `Interviewer was deleted successfully!` });
  });
};
exports.editOne = (req, res) => {
const portalinterviewer = {
  Mainid:req.body.Mainid,
  Process: req.body.Process,
  Remark:req.body.Remark,
  Mode:req.body.Mode,
  Result:req.body.Result
  }
  Portalinterviewer.edit(req.params.id, portalinterviewer,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Interviewer with Mainid ${req.params.Mainid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not edit Interviewer with Mainid " + req.params.Mainid
        });
      }
    }  else res.send(data);

  });
};