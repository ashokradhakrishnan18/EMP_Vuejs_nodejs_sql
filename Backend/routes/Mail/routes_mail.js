
module.exports = app  => {
    const portalmail = require("../../controller/Mail/controller_mail");

    app.post("/api/portal/send-email", portalmail.send , () => {
     console.log('portalposition Check');
    });
}