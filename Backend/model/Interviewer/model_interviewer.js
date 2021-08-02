const sql = require("../../config/db.js");

 function Portalinterviewer () {
this.Mainid=Portalinterviewer.Mainid;
this.Process=Portalinterviewer.Process;
this.Remark=Portalinterviewer.Remark;
this.Result=Portalinterviewer.Result;
this.Mode=Portalinterviewer.Mode;
};
Portalinterviewer.addByOne =  (Portalinterviewer, result) => {
sql.query("select * from tss.candidate_induction_interviewer where Mainid ='" + Portalinterviewer.Mainid + "' and Process='" + Portalinterviewer.Process + "'",async (err, res) => {
    if (err) {
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
      result({message:"Already Updated"},null);
      return;
    }
    else {
 sql.query("insert into tss.candidate_induction_interviewer SET ?", Portalinterviewer, (err, res) => {
  if (err) {
          result(err, null);
          return;
        }
       else if(res){
            result(null,'Interviewer Inserted Successfully...');
        return;
        }
    });
    }
});
};


 Portalinterviewer.findOne =  (Mainid, result) => {
  sql.query(`select * from tss.candidate_induction_interviewer where Mainid = ${Mainid}`, async (err, res) => {
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

 Portalinterviewer.findAll =  ( result) => {
  sql.query(`select * from tss.candidate_induction_interviewer`, async (err, res) => {
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


Portalinterviewer.remove = (Mainid, result) => {
  sql.query(`DELETE FROM tss.candidate_induction_interviewer WHERE Mainid = ${Mainid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Interviewer with Mainid: ", Mainid);
    result(null, res);
  });
};

Portalinterviewer.edit = (id, Portalinterviewer, result) => {
  sql.query("UPDATE tss.candidate_induction_interviewer SET Mainid = ?, Process = ?,Remark = ? ,Result = ? ,Mode = ? WHERE id = ?",[Portalinterviewer.Mainid, Portalinterviewer.Process,Portalinterviewer.Remark,Portalinterviewer.Result,Portalinterviewer.Mode,id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
  if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
    }
      console.log("updated Interviewer: ", { id: id, ...Portalinterviewer });
      result(null, { id: id, ...Portalinterviewer });
  });
};
module.exports = Portalinterviewer;

