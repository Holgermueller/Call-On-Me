const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  instructor_name: { type: String },
  email: { type: String },
  password: { type: String }
});

module.exports = mongoose.model("Instructor", instructorSchema);
