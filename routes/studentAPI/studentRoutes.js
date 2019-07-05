const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const checkAuth = require("../../auth/checkAuth");

router
  .route("/")
  .get(studentController.get_all_students)
  .post(studentController.add_student);

router
  .route("/:studentId")
  .get(studentController.find_student_by_id)
  .put(studentController.edit_student_info)
  .delete(studentController.remove_student);

module.exports = router;
