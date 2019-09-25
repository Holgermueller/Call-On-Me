const Sequelize = require("sequelize");
const db = require("../config/config");

const Course = db.define("course", {
  class_name: { type: Sequelize.STRING, allowNull: false },
  // created_by: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Instructor,
  //     key: "id",
  //   }
  // },
  // students: [
  //   {
  //     type: Sequelize.STRING,
  //     ref: "Student"
  //   }
  // ]
});

//Course.belongsTo(Instructor);

module.exports = Course;
