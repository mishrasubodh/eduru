const router = require("express").Router();
const mongoose = require("mongoose");
var multer = require('multer');
const Materials = mongoose.model("materialDetail");
var path = require('path');
var checkAuth = require("../middleware/auth");

const teacherController = require("../controller/teachersController");

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

router.post("/saveScreenShotsOfVideo/:teacherId", teacherController.saveScreenShotsOfVideo),

  //------------------------------MULTER------------UPLOAD_FILE-----------------------------------------------------



  router.post('/:teacherId/UploadFile', upload.array('material', 50), async (req, res, next) => {
if(res){
  console.log('resresresresresresresresresresresresresresres :>> ', res);
    console.log(' JSON.parse(JSON.stringify(req.body) on material ',  JSON.parse(JSON.stringify(req.body)));
    const obj = JSON.parse(JSON.stringify(req.body));
    const filePathArray = [];
    for (var i = 0; i < req.files.length; i++) {
      var filePath = req.files[i].path;
      filePathArray.push(filePath);
    }
    const materials = await new Materials
    materials.category = obj.category;
    materials.subCategory = obj.subCategory;
    materials.teacherId = req.params.teacherId;
    materials.amount = obj.amount;
    materials.description = obj.description;
    materials.videoImg = __dirname+'/public/uploads/Screenshot from 2020-12-15 19-12-32.png';
    materials.videoPath = filePathArray;
    await materials.save();
    res.send(materials);
  }
  }),

  router.get("/getVideoByCategory/:category", teacherController.getVideoByCategory);

  module.exports = router;
