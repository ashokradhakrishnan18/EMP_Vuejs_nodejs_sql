
module.exports = app => {
        const portalcandidate = require("../../controller/Candidate/controller_candidate");


 app.get("/api/portal/candidate/get", portalcandidate.findAll, ()=> {
           console.log('Candidate Check');
       });

 app.get("/api/portal/getcandidate/:id", portalcandidate.findOne, ()=> {
           console.log('Candidate Check');
       });

   app.post("/api/portal/addcandidate", portalcandidate.postCandidate, ()=> {
           console.log('Candidate Check');
       });
   app.delete("/api/portal/deletecandidate/:id", portalcandidate.deleteCandidate, ()=> {
           console.log('Candidate Check');
       });
  app.put("/api/portal/editcandidate/:id",portalcandidate.editcandidate, () => {
     console.log('portalposition Check');
    });
}