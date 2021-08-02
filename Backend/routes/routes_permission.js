    const portalpermission = require("../controller/controller_permission.js");
        let verifyToken = require('../config/verifytoken');

module.exports = findById  => {
    findById.get("/api/portal/permission/:role",verifyToken, portalpermission.findOne , () => {
     console.log('Permission Check');
    });
};
