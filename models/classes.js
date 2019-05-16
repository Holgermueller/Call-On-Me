const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  className: { type: String },
  createdBy: { type: Schema.Types.ObjectId },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

module.exports = mongoose.model("class", classSchema);
