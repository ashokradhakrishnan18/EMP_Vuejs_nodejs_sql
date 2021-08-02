    const portallogin = require("../controller/controller_login.js");

module.exports = AdminLogin => {
    
   AdminLogin.post("/api/portal/login", portallogin.login, ()=> {
           console.log('Login Check');
       });
}