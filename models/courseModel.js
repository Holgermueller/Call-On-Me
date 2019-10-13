const Sequelize = require("sequelize");
const db = require("../config/config");

const Course = db.define("course", {
  course_name: { type: Sequelize.STRING },
  student_id: {
    model: Student,
    key: "id",
    onDelete: "cascade"
  }
});

module.exports = Course;
