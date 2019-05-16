const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  preferredName: { type: String }
});

module.exports = mongoose.model("Student", studentSchema);
