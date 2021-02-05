var express = require('express')
var app = express()
const _ = require('lodash');
//const ProductImageModel = require('../models/Product_Image')
let option = {
};
app.use(express.static(__dirname + "/public", option));
app.get("/img/:screenshotsName", async (req, res) => {
  console.log('req.params.screenshotsNamereq.params.screenshotsNamereq.params.screenshotsName :>> ', req.params.screenshotsName);
  let img = `<img src=/dashboard/screenshotsImg/${req.params.screenshotsName}.png>`;
  res.setHeader('Content-Type', "text/html");
  res.send(img);
})

module.exports = app;







