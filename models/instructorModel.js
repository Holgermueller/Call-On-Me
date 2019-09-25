const Sequelize = require("sequelize");
const db = require("../config/config");

const Instructor = db.define("Instructor", {
  instructor_name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: Sequelize.STRING, allowNull: false },
  // Courses: [
  //   {
  //     type: Sequelize.STRING,
  //     ref: "Course"
  //   }
  // ]
});

module.exports = Instructor;
