const router = require("express").Router();
const studentController = require("../controllers/studentController");

router.route("/")
  .post(studentController.add_student)
  .get(studentController.get_all_students);

router.route("/:studentId")
  .get(studentController.find_student_by_id)
  .put(studentController.edit_student_info)
  .delete(studentController.remove_student);

module.exports = router;
