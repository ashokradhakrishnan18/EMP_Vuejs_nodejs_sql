
module.exports = app  => {
    const portalinterviewer = require("../../controller/Interviewer/controller_interviewer.js");
        // const verifyToken = require('../config/verifytoken');
   app.post("/api/portal/addinterviewer", portalinterviewer.addByOne, ()=> {
           console.log('Candidate Check');
       });
 app.get("/api/portal/interviewer/:Mainid", portalinterviewer.findOne, ()=> {
           console.log('Candidate Check');
       });
 app.get("/api/portal/allinterviewer", portalinterviewer.findAll, ()=> {
           console.log('Candidate Check');
       });
 app.put("/api/portal/editinterviewer/:id", portalinterviewer.editOne, ()=> {
           console.log('Candidate Check');
       });
 app.delete("/api/portal/deleteinnterviewer/:Mainid", portalinterviewer.deleteOne, ()=> {
           console.log('Candidate Check');
       });
}