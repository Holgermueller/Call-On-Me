const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  instructor_name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class"
    }
  ]
});

module.exports = mongoose.model("Instructor", instructorSchema);
