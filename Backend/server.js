const express = require("express");
const bodyParser = require("body-parser");
global.__basedir = __dirname + "/..";

const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Employee Portal." });
});

require("./routes/routes_permission.js")(app);
require("./routes/routes_register.js")(app);
require("./routes/routes_login.js")(app);
require("./routes/routes_position.js")(app);
require("./routes/routes_user.js")(app);
require("./routes/Candidate/routes_candidate.js")(app);
require("./routes/Interviewer/routes_interviewer.js")(app);
require("./routes/Files/routes_file.js")(app);
require("./routes/Mail/routes_mail.js")(app);
require("./routes/Attendance/routes_attendance.js")(app);

app.listen(3000, () => {
  // runs after 2 seconds
  console.log("Server is running on port 3000.");
});