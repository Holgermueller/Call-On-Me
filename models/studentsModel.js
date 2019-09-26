const Sequelize = require("sequelize");
const db = require("../config/config");

const Student = db.define("student", {
  first_name: { type: Sequelize.STRING, allowNull: false },
  last_name: { type: Sequelize.STRING, allowNull: false },
  preferred_name: { type: Sequelize.STRING, allowNull: false },
  times_called: { type: Sequelize.INTEGER, default: 0 },
  // course_id: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Course,
  //     key: "id"
  //   }
  // }
});

//Student.belongsTo(Course);

module.exports = Student;
