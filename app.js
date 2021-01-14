"use strict";
const express = require("express");
require("express-async-errors");
const app = express();
const path = require('path');
const expressEjsLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/new-website')));
//MidleWare
app.use(bodyParser.json()).use(morgan());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//database connection
require("./mongo");
//Models
require("./models/admin");
require("./models/student");
require("./models/teacher");
require("./models/registration");
require("./models/bankDetails");
require("./models/material");
require("./models/materialsPath")




// var isXhr = function isLoggedIn(req, res, next) {
//   if (req.xhr) {
    
//     console.log("coming in if condition in server.js", req.xhr)
//     next();
//   } else {
//     console.log("coming in else condition in server.js", req.xhr)
//     res.sendFile('dist/new-website/index.html', {
//       root: __dirname
//     });
//   }
// };
// app.use(isXhr);

app.use("/dashboard", require("./routes/admin"));
app.use("/dashboard", require("./routes/students"));
app.use("/dashboard", require("./routes/teachers"));
app.use("/dashboard", require("./routes/registration"));
app.use("/dashboard", require("./routes/login"));
app.use("/dashboard", require("./routes/teachers"));
app.use("/dashboard", require("./routes/bankDetails"));
//Not Found Route
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

//const PORT = process.env.PORT || 3300;
const PORT =3300;
app.listen(PORT, () =>
  console.log(`..........................server connect on port ${PORT}`)
);