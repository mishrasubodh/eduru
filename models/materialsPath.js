const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema(
  {
    filePaths: { type : Array , "default" : [] },
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
    },
  {
    timestamps: true,
  }
);
const materialPath = mongoose.model("materialPath", materialSchema);

module.exports = materialPath;
