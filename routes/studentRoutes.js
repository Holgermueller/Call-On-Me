const ROUTER = require("express").Router();
const studentControllers = require("../controllers/studentController");

ROUTER.route("/")
  .post(studentControllers.add_student)
  .get(studentControllers.get_all_students);

ROUTER.route("/:id")
  .get(studentControllers.find_student_by_id)
  .put(studentControllers.edit_student_info)
  .delete(studentControllers.remove_student);

module.exports = ROUTER;
