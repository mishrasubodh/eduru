const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");
const Materials = mongoose.model("materialDetail");
const Registration = mongoose.model("registration");
var ffmpeg = require('ffmpeg');
var exec = require('exec');

module.exports = {
  saveScreenShotsOfVideo: async (req, res) => {
    console.log('req.paramsreq.paramsreq.params::::::::::::::::::::::::::::::::::: :>>', req.params)
    const videosOffirstObject = await Materials.find({ teacherId: req.params.teacherId }, { videoPath: 1, _id: 0 });
    const firstVideo = videosOffirstObject[0].videoPath[0];
    console.log('videoPathvideoPathvideoPathvideoPath >>>>>>>>>>>>>>>>>>>>>>>>>:>>', firstVideo)
    //---------------take screenshot of video------------------------
  //   exec("ffmpeg -i Video/" + firstVideo  + " -ss 01:30 -r 1 -an -vframes 1 -f mjpeg Video/" + firstVideo  + ".jpg", function(err){
  //     socket.emit('Done', {'Image' : 'Video/' + firstVideo + '.jpg'});
  // });
  //   try {
  //     var process = new ffmpeg(firstVideo);
  //     process.then(function (video) {
  //       console.log('videovideovideovideo---------------------------------------- :>>', video)
  //         // Callback mode
  //         const filenamee ='/media/shipgig/ea00d876-fb89-43b6-bd2c-785b91adbec4/Anand/eduru/routes/public/uploads/test'
  //         const filename = ["anand","bhardwaj"]
  //         console.log('object --------------------------:>>', __dirname)
  //         video.fnExtractFrameToJPG(filenamee, {
           
  //             frame_rate: 1,
  //             number: 50,
  //             keep_pixel_aspect_ratio : true,
  //             keep_aspect_ratio: true,
  //             file_name : filename[0]+'_%s'
  //         }, function (error,files){
  
  //             if(!error)
  //                 {   

  //                     var fileJsonStr = JSON.stringify(files);
  // console.log('fileJsonStrfileJsonStrfileJsonStrfileJsonStrfileJsonStr :>>', fileJsonStr)
  //                     makeZip(zipdest,__dirname+filename[0]+'.zip');
  
  //                     console.log(res);
  
  //                     res.send(fileJsonStr).responseJSON;
  //                 }
  //         });
  //     }, function (err) {
  //          console.log('Error: ' + err);
  //     });
  //   }
  //   catch (e) {
  //     console.log(e.code);
  //     console.log(e.msg);
  // }
   
    

    // const materials = new Materials();
    // materials.category = req.body.category;
    // materials.subCategory = req.body.subCategory;
    // materials.teacherId = req.body.teacherId;
    // // await materials.save();
    // res.send(materials)
  },

  getAllTeacher: async (req, res, next) => {
    const teacher = await Teacher.findOne({});
    //console.log('teacher :>>', res.send(teacher))
    res.send("Featched all teacher !\n" + teacher);
  },

  getTeacherInfoByID: async (req, res) => {
    try {
      const teacherData = await Registration.findOne({ _id: req.params.id });
      if (teacherData) {
        return res.status(200).json({ success: true, message: 'Success', data: teacherData })
      } else {
        return res.status(404).json({ success: false, message: 'failed', })
      }
    } catch (err) {
      return res.status(404).json({ success: false, message: 'failed', })
    }

  },

  
  addTeacher: async (req, res) => {
    const teacher = new Teacher();
    teacher.firstName = req.body.firstName;
    teacher.lastName = req.body.lastName;
    teacher.user_name = req.body.user_name;
    teacher.category = req.body.category;
    teacher.DOB = req.body.DOB;
    teacher.email = req.body.email;
    teacher.password = req.body.password;
    teacher.termAndCondition = req.body.termAndCondition;
    teacher.mob_no = req.body.mob_no;
    teacher.date = req.body.date;
    await teacher.save();
    res.send(teacher);
  },
  getAnTeacher: async (req, res) => {
    const teacher = await Teacher.findOne({ _id: req.params.teacherId });
    res.send("Featched following teacher !\n" + teacher);
  },

  updateAnTeacher: async (req, res) => {
    const teacher = await Teacher.findByIdAndUpdate(
      {
        _id: req.params.teacherId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send("Updated following teacher !\n" + teacher);
  },
  
  deleteAnTeacher: async (req, res) => {
    const teacher = await Teacher.findByIdAndRemove({
      _id: req.params.teacherId,
    });
    res.send("Deleted following teacher !\n" + teacher);
  },


  getVideoByCategory: async (req, res) => {
    const Videos = await Materials.find({ category: req.params.category });
    res.send(Videos);
  },
}