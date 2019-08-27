const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  class_name: { type: String, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }
});

module.exports = mongoose.model("Class", classSchema);
