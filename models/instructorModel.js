const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  instructor_name: { type: String },
  email: { type: String },
  password: { type: String },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class"
    }
  ]
});

module.exports = mongoose.model("Instructor", instructorSchema);
