const mysql = require("mysql");
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  DB: "tss",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});  
con.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = con;