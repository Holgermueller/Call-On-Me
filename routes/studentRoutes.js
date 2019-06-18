const router = require("express").Router();
const studentController = require("../controllers/studentController");
const checkAuth = require("../auth/checkAuth");

router.get("/", checkAuth, studentController.get_all_students);

router.post("/", studentController.add_student);

router.get("/:studentId", checkAuth, studentController.find_student_by_id);

router.put("/:studentId", checkAuth, studentController.edit_student_info);

router.delete("/:studentId", checkAuth, studentController.remove_student);

module.exports = router;
