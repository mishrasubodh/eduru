const mongoose = require("mongoose");
const materialDetail = mongoose.model("materialDetail");
const RegModel = mongoose.model("registration");


exports.getMaterialByCategory = async (req,res) => {
    const material = await materialDetail.find({category:req.params.categoryType},{});
    return res
          .status(200)
          .json({ success: true, message: "Success", data: material });
  };

  exports.getMaterialBySubCategory = async (req,res) => {
    const material = await materialDetail.find({subCategory:req.params.subcategoryType},{});
    return res
          .status(200)
          .json({ success: true, message: "Success", data: material });
  };
  
   exports.getMaterialByTeacherId = async (req,res) => {
    let material = await materialDetail.find({teacherId:req.params.teacherId},{}).limit(1);
    console.log('resresres :>> ', res);
    const teacherInfo = await RegModel.find({_id:req.params.teacherId},{_id:0,FirstName:1,lastName:1});
    return res
          .status(200)
          .json({ success: true, message: "Success", data:{ material,teacherInfo }});
  };

