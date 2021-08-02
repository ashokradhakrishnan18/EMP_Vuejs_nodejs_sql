    const portalregister = require("../controller/controller_register.js");

module.exports = register => {
    register.post("/api/portal/register", portalregister.register, () => {
     console.log('Register Check');
    });
};