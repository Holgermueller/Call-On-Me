const router = require("express").Router();
const courseController = require("../../controllers/courseController");
//const checkAuth = require("../../auth/checkAuth");

router
  .route("/")
  .get( courseController.get_all_courses)
  .post( courseController.add_course);

router
  .route("/:classId")
  .get( courseController.get_one_course)
  .delete( courseController.remove_course);

module.exports = router;
