const router = require("express").Router();
const classController = require("../controllers/classController");

router.route("/")
  .post(classController.add_class)
  .get(classController.get_all_classes);

router.route("/:classId")
  .get(classController.get_one_class)
  .delete(classController.remove_class);

module.exports = router;
