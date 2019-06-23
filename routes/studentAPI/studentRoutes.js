const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const checkAuth = require("../../auth/checkAuth");

router
  .route("/")
  .get(checkAuth, studentController.get_all_students)
  .post(studentController.add_student);

router
  .route("/:studentId")
  .get(checkAuth, studentController.find_student_by_id)
  .put(checkAuth, studentController.edit_student_info)
  .delete(checkAuth, studentController.remove_student);

module.exports = router;
