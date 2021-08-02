

module.exports = app  => {
    const portalposition = require("../controller/controller_position.js");
        const verifyToken = require('../config/verifytoken');

    app.get("/api/portal/position/role",verifyToken, portalposition.findAll , () => {
     console.log('portalposition Check');
    });

    app.get("/api/portal/position/:role",verifyToken, portalposition.findOne, () => {
     console.log('portalposition Check');
    });

  app.post("/api/portal/position/addrole",verifyToken, portalposition.addByRole, () => {
     console.log('portalposition Check');
    });

  app.delete("/api/portal/position/deleterole/:id", verifyToken,portalposition.deleterole, () => {
     console.log('portalposition Check');
    });
  app.put("/api/portal/position/editrole/:id", verifyToken,portalposition.editrole, () => {
     console.log('portalposition Check');
    });

};




