
module.exports = app => {
        const portalattendance = require("../../controller/Attendance/controller_attendance");
   app.post("/api/portal/addattendance", portalattendance.postattendance, ()=> {
           console.log('Candidate Check');
       });
  app.put("/api/portal/editattendance/:emp_id",portalattendance.editattendance, () => {
     console.log('portalposition Check');
    });
//   app.put("/api/portal/editattendance/:date",portalattendance.editattendance, () => {
//      console.log('portalposition Check');
//     });
 app.get("/api/portal/attendance/get", portalattendance.findAll, ()=> {
           console.log('Candidate Check');
       });
 app.get("/api/portal/attendance/:emp_id/:date", portalattendance.findOne, ()=> {
           console.log('Candidate Check');
       });
 app.get("/api/portal/attendance/:date", portalattendance.findbyDate, ()=> {
           console.log('Candidate Check');
       });
   app.delete("/api/portal/deleteattendance/:id", portalattendance.deleteattendance, ()=> {
           console.log('Candidate Check');
       });

}