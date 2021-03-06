const express = require("express");
const router = require("express").Router();
const TeacherBanckDetailController = require("../controller/bankDetailsController");
router.post("/bankDetails", TeacherBanckDetailController.addTeacherBankDetails);
router.get("/bankDetails/getDetail/:teacherId", TeacherBanckDetailController.getTeacherBankDetails);


module.exports = router;