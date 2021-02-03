const mongoose = require("mongoose");
const materialDetail = mongoose.model("materialDetail");

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
    const material = await materialDetail.find({teacherId:req.params.teacherId},{});
    return res
          .status(200)
          .json({ success: true, message: "Success", data: material });
  };

