const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  instructor_name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, required: true },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class"
    }
  ]
});

module.exports = mongoose.model("Instructor", instructorSchema);
