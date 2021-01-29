const express = require("express");
const router = require("express").Router();

const registrationController = require("../controller/registrationController");

router.post("/registration", registrationController.Registration);

//router.post("/registration/upDateTeacher", registrationController.upDateTeacher);
module.exports = router;

