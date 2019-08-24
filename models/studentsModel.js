const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  preferred_name: { type: String, required: true },
  times_called: { type: Number, default: 0 },
  class_student_is_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class"
  }
});

module.exports = mongoose.model("Student", studentSchema);
