const Candidate = require("../../model/Candidate/model_candidate.js");

exports.findAll =  ( req,res) => {
 
 Candidate.findAll((err, data) => {

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

exports.postCandidate =  ( req,res) => {
const postCandidateinfo = {
position:req.body.position,
date:req.body.date,
name:req.body.name,
contact:req.body.contact,
email_id:req.body.email_id,
dob:req.body.dob,
age:req.body.age,
gender:req.body.gender,
marital:req.body.marital,
address:req.body.address,
ref:req.body.ref,
point_to_contact:req.body.point_to_contact,
aadhar:req.body.aadhar,
technology:req.body.technology
}
const postCandidate_edu= {
id:req.body.id,
education1:req.body.education1,
from1:req.body.from1,
to1:req.body.to1,
nameofinstitution1:req.body.nameofinstitution1,
course1:req.body.course1,
university1:req.body.university1,
universitylocation1:req.body.universitylocation1,
yearofpassing1:req.body.yearofpassing1,
mark1:req.body.mark1,
education2:req.body.education2,
from2:req.body.from2,
to2:req.body.to2,
nameofinstitution2:req.body.nameofinstitution2,
course2:req.body.course2,
university2:req.body.university2,
universitylocation2:req.body.universitylocation2,
yearofpassing2:req.body.yearofpassing2,
mark2:req.body.mark2,
education3:req.body.education3,
from3:req.body.from3,
to3:req.body.to3,
nameofinstitution3:req.body.nameofinstitution3,
course3:req.body.course3,
university3:req.body.university3,
universitylocation3:req.body.universitylocation3,
yearofpassing3:req.body.yearofpassing3,
mark3:req.body.mark3
}
const postCandidate_emp= {
id:req.body.id,
employment1:req.body.employment1,
empfrom1:req.body.empfrom1,
empto1:req.body.empto1,
designation1:req.body.designation1,
lastctc1:req.body.lastctc1,
reason1:req.body.reason1,
hrname1:req.body.hrname1,
hrdesignation1:req.body.hrdesignation1,
landline1:req.body.landline1,
hremail1:req.body.hremail1,
employment2:req.body.employment2,
empfrom2:req.body.empfrom2,
empto2:req.body.empto2,
designation2:req.body.designation2,
lastctc2:req.body.lastctc2,
reason2:req.body.reason2,
hrname2:req.body.hrname2,
hrdesignation2:req.body.hrdesignation2,
landline2:req.body.landline2,
hremail2:req.body.hremail2,
expctc:req.body.expctc,
swhmd:req.body.swhmd
}
const postCandidate_gap= {
id:req.body.id,
gap1:req.body.gap1,
gapfrom1:req.body.gapfrom1,
gapto1:req.body.gapto1,
reasongap1:req.body.reasongap1,
gap2:req.body.gap2,
gapfrom2:req.body.gapfrom2,
gapto2:req.body.gapto2,
reasongap2:req.body.reasongap2
}
const postCandidate_lag= {
id:req.body.id,
lag1:req.body.lag1,
read1:req.body.read1,
write1:req.body.write1,
speak1:req.body.speak1,
lag2:req.body.lag2,
read2:req.body.read2,
write2:req.body.write2,
speak2:req.body.speak2,
lag3:req.body.lag3,
read3:req.body.read3,
write3:req.body.write3,
speak3:req.body.speak3
}
const postCandidate_others= {
id:req.body.id,
strengthandweak:req.body.strengthandweak,
hobbies:req.body.hobbies,
resume:req.body.resume,
signature:req.body.signature,
fathername:req.body.fathername,
mothername:req.body.mothername,
siblingname:req.body.siblingname,
bankname:req.body.bankname,
accholdername:req.body.accholdername,
accnumber:req.body.accnumber,
ifsccode:req.body.ifsccode,
pfnumber:req.body.pfnumber
}

 Candidate.addBydata(postCandidateinfo,postCandidate_edu,postCandidate_emp,postCandidate_gap,postCandidate_lag,postCandidate_others,async (err, data) => {
    if (err)
     await res.status(404).send({
        message: err.message || "Some error"
      });
    else { 
await res.send(data);({
        message:"Insert SuccesFully..."
        });
    }
  });
};



exports.findOne =  (req, res) => {
     Candidate.findById (req.params.id, (err, data) => {
if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with role ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with id " + req.params.id
        });
      }
    } else res.send(data);
  });      
};

exports.deleteCandidate = (req, res) => {
  Candidate.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Candidate with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Candidate with id " + req.params.id
        });
      }
    } else res.send({ message: `Candidate was deleted successfully!` });
  });
};


exports.editcandidate = (req, res) => {
const editCandidateinfo = {
position:req.body.position,
date:req.body.date,
name:req.body.name,
contact:req.body.contact,
email_id:req.body.email_id,
dob:req.body.dob,
age:req.body.age,
gender:req.body.gender,
marital:req.body.marital,
address:req.body.address,
ref:req.body.ref,
point_to_contact:req.body.point_to_contact,
aadhar:req.body.aadhar,
technology:req.body.technology
}
const editCandidate_edu= {
id:req.params.id,
education1:req.body.education1,
from1:req.body.from1,
to1:req.body.to1,
nameofinstitution1:req.body.nameofinstitution1,
course1:req.body.course1,
university1:req.body.university1,
universitylocation1:req.body.universitylocation1,
yearofpassing1:req.body.yearofpassing1,
mark1:req.body.mark1,
education2:req.body.education2,
from2:req.body.from2,
to2:req.body.to2,
nameofinstitution2:req.body.nameofinstitution2,
course2:req.body.course2,
university2:req.body.university2,
universitylocation2:req.body.universitylocation2,
yearofpassing2:req.body.yearofpassing2,
mark2:req.body.mark2,
education3:req.body.education3,
from3:req.body.from3,
to3:req.body.to3,
nameofinstitution3:req.body.nameofinstitution3,
course3:req.body.course3,
university3:req.body.university3,
universitylocation3:req.body.universitylocation3,
yearofpassing3:req.body.yearofpassing3,
mark3:req.body.mark3
}
const editCandidate_emp= {
id:req.params.id,
employment1:req.body.employment1,
empfrom1:req.body.empfrom1,
empto1:req.body.empto1,
designation1:req.body.designation1,
lastctc1:req.body.lastctc1,
reason1:req.body.reason1,
hrname1:req.body.hrname1,
hrdesignation1:req.body.hrdesignation1,
landline1:req.body.landline1,
hremail1:req.body.hremail1,
employment2:req.body.employment2,
empfrom2:req.body.empfrom2,
empto2:req.body.empto2,
designation2:req.body.designation2,
lastctc2:req.body.lastctc2,
reason2:req.body.reason2,
hrname2:req.body.hrname2,
hrdesignation2:req.body.hrdesignation2,
landline2:req.body.landline2,
hremail2:req.body.hremail2,
expctc:req.body.expctc,
swhmd:req.body.swhmd
}
const editCandidate_gap= {
id:req.params.id,
gap1:req.body.gap1,
gapfrom1:req.body.gapfrom1,
gapto1:req.body.gapto1,
reasongap1:req.body.reasongap1,
gap2:req.body.gap2,
gapfrom2:req.body.gapfrom2,
gapto2:req.body.gapto2,
reasongap2:req.body.reasongap2
}
const editCandidate_lag= {
id:req.params.id,
lag1:req.body.lag1,
read1:req.body.read1,
write1:req.body.write1,
speak1:req.body.speak1,
lag2:req.body.lag2,
read2:req.body.read2,
write2:req.body.write2,
speak2:req.body.speak2,
lag3:req.body.lag3,
read3:req.body.read3,
write3:req.body.write3,
speak3:req.body.speak3
}
const editCandidate_others= {
id:req.params.id,
strengthandweak:req.body.strengthandweak,
hobbies:req.body.hobbies,
resume:req.body.resume,
signature:req.body.signature,
fathername:req.body.fathername,
mothername:req.body.mothername,
siblingname:req.body.siblingname,
bankname:req.body.bankname,
accholdername:req.body.accholdername,
accnumber:req.body.accnumber,
ifsccode:req.body.ifsccode,
pfnumber:req.body.pfnumber
}
  Candidate.editcandidate(req.params.id, editCandidateinfo,editCandidate_edu,editCandidate_emp,editCandidate_gap,editCandidate_lag,editCandidate_others,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Candidate with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not edit Candidate with id " + req.params.id
        });
      }
    } else res.status(200).send({
          message: "Candidate Updated succesfully " 
        });
  });
};