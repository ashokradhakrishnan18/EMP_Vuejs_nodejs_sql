
const sql = require("../../config/db.js");

// constructor
 function Candidate () {
this.position = postCandidateinfo.position,
this.date = postCandidateinfo.date,
this.name = postCandidateinfo.name,
this.contact = postCandidateinfo.contact,
this.email_id = postCandidateinfo.email_id,
this.dob = postCandidateinfo.dob,
this.age = postCandidateinfo.age,
this.gender = postCandidateinfo.gender,
this.marital = postCandidateinfo.marital,
this.address = postCandidateinfo.address,
this.ref = postCandpostCandidateinfoidate.ref,
this.point_to_contact = postCandidateinfo.point_to_contact,
this.aadhar = postCandidateinfo.aadhar,
this.technology=postCandidateinfo.technology
};

Candidate.addBydata =  (postCandidateinfo,postCandidate_edu,postCandidate_emp,postCandidate_gap,postCandidate_lag,postCandidate_others,result) => {
  sql.query("select * from tss.candidate_induction_info where name ='" + postCandidateinfo.name + "'",async (err, res) => {
    if (err) {
      result( await err, null);
      return;
              }
            else if (res.length > 0) {
            result({message:"Name already exist"},null);
            return;
              }
                else {
                sql.query("insert into tss.candidate_induction_info SET ?", postCandidateinfo, (err, res) => {
                    if (err) {
                    result(err, null);
                    return;
                    }
                else if(res){
                let resid=res.insertId
                    let values=[
                    resid,
                    postCandidate_edu.education1,
                    postCandidate_edu.from1,
                    postCandidate_edu.to1,
                    postCandidate_edu.nameofinstitution1,
                    postCandidate_edu.course1,
                    postCandidate_edu.university1,
                    postCandidate_edu.universitylocation1,
                    postCandidate_edu.yearofpassing1,
                    postCandidate_edu.mark1,
                    postCandidate_edu.education2, 
                    postCandidate_edu.from2,
                    postCandidate_edu.to2,
                    postCandidate_edu.nameofinstitution2,
                    postCandidate_edu.course2,
                    postCandidate_edu.university2,
                    postCandidate_edu.universitylocation2,
                    postCandidate_edu.yearofpassing2,
                    postCandidate_edu.mark2,
                    postCandidate_edu.education3,
                    postCandidate_edu.from3,
                    postCandidate_edu.to3,
                    postCandidate_edu.nameofinstitution3,
                    postCandidate_edu.course3,
                    postCandidate_edu.university3,
                    postCandidate_edu.universitylocation3,
                    postCandidate_edu.yearofpassing3,
                    postCandidate_edu.mark3
                    ]
                sql.query(`INSERT INTO tss.candidate_induction_edu(id,education1,from1,to1,nameofinstitution1,course1,university1,universitylocation1,yearofpassing1,mark1,education2,from2,to2,nameofinstitution2,course2,university2,universitylocation2,yearofpassing2,mark2,education3,from3,to3,nameofinstitution3,course3,university3,universitylocation3,yearofpassing3,mark3) VALUES (?)`,[values], (err, res) => {
                  if (err) {
                    result(err, null);  
                    return;
                    }
                else if(res){
                    let values = [
                     resid,
                    postCandidate_emp.employment1,
                    postCandidate_emp.empfrom1,
                    postCandidate_emp.empto1,
                    postCandidate_emp.designation1,
                    postCandidate_emp.lastctc1,
                    postCandidate_emp.reason1,
                    postCandidate_emp.hrname1,
                    postCandidate_emp.hrdesignation1,
                    postCandidate_emp.landline1,
                    postCandidate_emp.hremail1,
                    postCandidate_emp.employment2,
                    postCandidate_emp.empfrom2,
                    postCandidate_emp.empto2,
                    postCandidate_emp.designation2,
                    postCandidate_emp.lastctc2,
                    postCandidate_emp.reason2,
                    postCandidate_emp.hrname2,
                    postCandidate_emp.hrdesignation2,
                    postCandidate_emp.landline2,
                    postCandidate_emp.hremail2,
                    postCandidate_emp.expctc,
                    postCandidate_emp.swhmd,
                        ]
                    sql.query(`INSERT INTO tss.candidate_induction_emp(id,employment1,empfrom1,empto1,designation1,lastctc1,reason1,hrname1,hrdesignation1,landline1,hremail1,employment2,empfrom2,empto2,designation2,lastctc2,reason2,hrname2,hrdesignation2,landline2,hremail2,expctc,swhmd) VALUES (?)`,[values], (err, res) => {      
                  if (err) {
                    result(err, null);
                    return;
                    }
                else if(res){
                    let values = [
                     resid,
                    postCandidate_gap.gap1,
                    postCandidate_gap.gapfrom1,
                    postCandidate_gap.gapto1,
                    postCandidate_gap.reasongap1,
                    postCandidate_gap.gap2,
                    postCandidate_gap.gapfrom2,
                    postCandidate_gap.gapto2,
                    postCandidate_gap.reasongap2
                        ]
                    sql.query(`INSERT INTO tss.candidate_induction_gap(id,gap1,gapfrom1,gapto1,reasongap1,gap2,gapfrom2,gapto2,reasongap2) VALUES (?)`,[values], (err, res) => {
                    if (err) {
                    result(err, null);
                    return;
                    }
                else if(res){
                      let values = [
                     resid,
                    postCandidate_lag.lag1,
                    postCandidate_lag.read1,
                    postCandidate_lag.write1,
                    postCandidate_lag.speak1,
                    postCandidate_lag.lag2,
                    postCandidate_lag.read2,
                    postCandidate_lag.write2,
                    postCandidate_lag.speak2,
                    postCandidate_lag.lag3,
                    postCandidate_lag.read3,
                    postCandidate_lag.write3,
                    postCandidate_lag.speak3
                    ]
                    sql.query(`INSERT INTO tss.candidate_induction_language(id,lag1,read1,write1,speak1,lag2,read2,write2,speak2,lag3,read3,write3,speak3) VALUES (?)`,[values], (err, res) => {
                    if (err) {
                    result(err, null);
                    return;
                    }
                else if(res){
                    let values = [
                    resid,
                    postCandidate_others.strengthandweak,
                    postCandidate_others.hobbies,
                    postCandidate_others.resume,
                    postCandidate_others.signature,
                    postCandidate_others.fathername,
                    postCandidate_others.mothername,
                    postCandidate_others.siblingname,
                    postCandidate_others.bankname,
                    postCandidate_others.accholdername,
                    postCandidate_others.accnumber,
                    postCandidate_others.ifsccode,
                    postCandidate_others.pfnumber
                    ]
                    sql.query(`INSERT INTO tss.candidate_induction_bank(id,strengthandweak,hobbies,resume,signature,fathername,mothername,siblingname,bankname,accholdername,accnumber,ifsccode,pfnumber) VALUES (?)`,[values], (err, res) => {
                    if (err) {
                    result(err, null);
                    return;
                    }
                   else if(res){
                        result(null,'User Register Successfully...');
                    return;

                     }
                    });
                     }
                    });
                     }
                    });
                    }
                    });
                     }
                    });
                    }
                });
                }

  });
};

 Candidate.findAll =  ( result) => {
  sql.query(`select * from tss.candidate_induction_info`, async (err, res) => {
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

 Candidate.findById =  (id, result) => {
  // sql.query(`select * from tss.candidate_induction_info where id = ${id}`, async (err, res) => {
  // sql.query(`Select * from tss.candidate_induction_info info, tss.candidate_induction_edu edu where info.id = edu.id and info.id= ${id}`, async (err, res) => {
sql.query(`SELECT tss.candidate_induction_info.*, tss.candidate_induction_edu.*,tss.candidate_induction_emp.*,tss.candidate_induction_gap.*,tss.candidate_induction_language.*,tss.candidate_induction_bank.* FROM tss.candidate_induction_info
LEFT JOIN tss.candidate_induction_edu 
ON (tss.candidate_induction_info.id = tss.candidate_induction_edu.id)
LEFT JOIN tss.candidate_induction_emp
ON (tss.candidate_induction_info.id= candidate_induction_emp.id)
LEFT JOIN tss.candidate_induction_gap
ON (tss.candidate_induction_info.id= candidate_induction_gap.id)
LEFT JOIN tss.candidate_induction_language
ON (tss.candidate_induction_info.id= candidate_induction_language.id)
LEFT JOIN tss.candidate_induction_bank
ON (tss.candidate_induction_info.id= candidate_induction_bank.id)
where tss.candidate_induction_info.id  = ${id}`, async (err, res) => {
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

Candidate.remove = (id, result) => {
  sql.query(`DELETE FROM tss.candidate_induction_info WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
      sql.query(`DELETE FROM tss.candidate_induction_edu WHERE id = ${id}`, (err, res) => {
if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
         sql.query(`DELETE FROM tss.candidate_induction_emp WHERE id = ${id}`, (err, res) => {
if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
         sql.query(`DELETE FROM tss.candidate_induction_gap WHERE id = ${id}`, (err, res) => {
if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
         sql.query(`DELETE FROM tss.candidate_induction_language WHERE id = ${id}`, (err, res) => {
if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
         sql.query(`DELETE FROM tss.candidate_induction_bank WHERE id = ${id}`, (err, res) => {
if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      console.log(res)
      result({ kind: "not_found" }, null);
      return;
    }
        
       result(null, res);
   
      });
      });
      });
      });
      });
  });
};

Candidate.editcandidate = (id, editCandidateinfo,editCandidate_edu,editCandidate_emp,editCandidate_gap,editCandidate_lag,editCandidate_others, result) => {

  sql.query('UPDATE tss.candidate_induction_info SET ? WHERE id = ' + id, editCandidateinfo, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
 if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
  else if(res){
  sql.query('UPDATE tss.candidate_induction_edu SET ? WHERE id = ' + id, editCandidate_edu, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
     else if(res){
  sql.query('UPDATE tss.candidate_induction_emp SET ? WHERE id = ' + id, editCandidate_emp, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
 if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
     else if(res){
       sql.query('UPDATE tss.candidate_induction_gap SET ? WHERE id = ' + id, editCandidate_gap, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
 if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
     else if(res){
       sql.query('UPDATE tss.candidate_induction_language SET ? WHERE id = ' + id, editCandidate_lag, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
 if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
     else if(res){
       sql.query('UPDATE tss.candidate_induction_bank SET ? WHERE id = ' + id, editCandidate_others, (err, res) => {
  if (err) {
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
     else if(res){
     result(null, res);
     }
  });
     }
  });
     }
  });
     }
  });

    }
  });
    }
  });
};
module.exports = Candidate