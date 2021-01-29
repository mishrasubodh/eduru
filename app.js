"use strict";
const express = require("express");
require("express-async-errors");
const app = express();
const path = require('path');
const expressEjsLayout = require("express-ejs-layouts");
var bodyParser = require('body-parser');
const morgan = require("morgan");
var cors = require('cors');
const { urlencoded } = require("body-parser");
app.use(cors())      
//  app.use.bodyParser = {
//   json: {limit: '50000mb', extended: true},
//   urlencoded: {limit: '50000mb', extended: true}
// };
// app.use.bodyParser = {
//   json: {},
//   urlencoded: {}
// };
app.use(express.json({}));
app.use(express.urlencoded({}));

app.use(express.static(path.join(__dirname, 'dist/new-website')));
 app.use(bodyParser.json()).use(morgan());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//   var isXhr = function isLoggedIn(req, res, next) {
//   if (req.xhr) {

//     console.log("coming in if condition in server.js", req.xhr)
//     next();
//   } else {
//      console.log("coming in else condition in server.js", req.xhr)
//     res.sendFile('dist/new-website/index.html', {
//        root: __dirname
//     });
//   }
//  };
//  app.use(isXhr);



require("./mongo");
require("./models/adminModel");
require("./models/studentModel");
require("./models/teacherModel");
require("./models/registrationModel");
require("./models/bankDetailsModel");
require("./models/materialModel");
//require("./models/Category")

app.use("/dashboard", require("./routes/adminRouter"));
app.use("/dashboard", require("./routes/studentsRouter"));
app.use("/dashboard", require("./routes/teachersRouter"));
app.use("/dashboard", require("./routes/registrationRouter"));
app.use("/dashboard", require("./routes/loginRouter"));
app.use("/dashboard", require("./routes/teachersRouter"));
app.use("/dashboard", require("./routes/bankDetailsRouter"));
app.use("/dashboard", require("./routes/materialRouter"));

app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("Routes not found");
  next(error);
});

if (app.get("env") === "production") {
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
    });
  });
}

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack,
  });
});

const PORT = 3300;
app.listen(PORT, () =>
  console.log(`..........................server connect on port ${PORT}`)
);