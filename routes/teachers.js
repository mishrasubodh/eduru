const router = require("express").Router();
const mongoose = require("mongoose");
var multer = require('multer');
const MaterialPath = mongoose.model("materialPath");
const Materials = mongoose.model("materialDetail");
const FilessPath = mongoose.model("materialPath");
var path = require('path');
var checkAuth = require("../middleware/auth");
var bodyParser = require('body-parser')

const teacherController = require("../controller/teachers");

var storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, __dirname + '/public/uploads')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage });

router.post("/teacherInfobyID/:id", teacherController.getTeacherInfoByID),

  router.get("/getAllTeacher", teacherController.getAllTeacher);

router.post("/addTeacher", checkAuth, teacherController.addTeacher);

router.get("/getAnTeacher/:teacherId", checkAuth, teacherController.getAnTeacher);

router.put("/updateAnTeacher/:teacherId", checkAuth, teacherController.updateAnTeacher);

router.delete(
  "/deleteAnTeacher/:teacherId",
  checkAuth,
  teacherController.deleteAnTeacher
);

router.post("/saveMaterials/:teacherId", teacherController.saveFiles),

  //------------------------------MULTER------------UPLOAD_FILE-----------------------------------------------------



  router.post('/:teacherId/UploadFile', upload.array('material', 50), async (req, res, next) => {
    const obj = JSON.parse(JSON.stringify(req.body));
    const filePathArray = [];
    for (var i = 0; i < req.files.length; i++) {
      var filePath = req.files[i].path;
      filePathArray.push(filePath);
    }
    const materials = await new Materials
    materials.category = obj.category;
    materials.subCategory = obj.subCategory;
    materials.teacherId = obj.teacherId;
    materials.videoPath = filePathArray;
    await materials.save();
    res.send(materials);
  }),

  module.exports = router;
