const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
  preferred_name: String
});

module.exports = mongoose.model("Student", studentSchema);
