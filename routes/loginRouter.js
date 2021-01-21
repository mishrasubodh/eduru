const express = require("express");
const router = require("express").Router();



const loginController = require("../controller/loginController");

router.post("/login", loginController.Login);
module.exports = router;
