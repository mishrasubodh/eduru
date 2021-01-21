const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    subCategory: {
        type: String,
        required: true,
      },
    teacherId: {
      type: String,
      
      required: true,   
    },
    videoPath:{ type : Array , "default" : [] },
    amount:{
      type : String,
      required: true,
    },
    videoImg:{
      type :String,
      required:false,
    },description:{
      type :String,
      required :false,
    }
    },
   
  {
    timestamps: true,
  }
);
const material = mongoose.model("materialDetail", materialSchema);

module.exports = material;
