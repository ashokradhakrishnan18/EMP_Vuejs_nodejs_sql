    const portaluser = require("../controller/controller_user.js");
        let verifyToken = require('../config/verifytoken');
    const portalusers = require("../controller/controller_user.js");

module.exports = user => {
    user.get("/api/portal/user",verifyToken, portaluser.get, () => {
     console.log('Register Check');
    });

 user.delete("/api/portal/position/deleteuser/:id", verifyToken,portaluser.deleteuser, () => {
     console.log('portalposition Check');
    });

    user.put("/api/portal/position/edituser/:id", verifyToken,portaluser.updateuser, () => {
     console.log('portalposition Check');
    });
};

