const router = require("express").Router();
const mongoose = require("mongoose");
var multer = require('multer');
const Materials = mongoose.model("materialDetail");
var path = require('path');
var checkAuth = require("../middleware/auth");
var bodyParser = require('body-parser')

const teacherController = require("../controller/teachersController");
const vv = "changing just for commit"

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
    // if(res){
    //   console.log('req.filesreq.filesreq.filesreq.filesreq.filesreq.filesreq.files  48:>>',JSON.stringify( req))
    // }
    console.log('coming in...........................................uploader')
    console.log('req.filesreq.filesreq.filesreq.filesreq.filesreq.filesreq.files  48:>>',req)
    
    //console.log('req................................... :>>', req)
    //console.log('reqreqreqreqreqreqreqreq :>>', req.body)
     //const obj = JSON.parse(JSON.stringify(req.body));
   // const obj = JSON.stringify(req.body);
    //console.log('objobjobjobjobjobjobjobjobjobj :>>', obj)
    console.log('req.filesreq.filesreq.filesreq.filesreq.filesreq.filesreq.files 56:>>',JSON.stringify( req))
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
  }),

  router.get("/getVideoByCategory/:category", teacherController.getVideoByCategory);

  module.exports = router;
