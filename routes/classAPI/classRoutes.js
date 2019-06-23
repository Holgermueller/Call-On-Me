const router = require("express").Router();
const classController = require("../../controllers/classController");
const checkAuth = require("../../auth/checkAuth");

router
  .route("/")
  .get(checkAuth, classController.get_all_classes)
  .post(checkAuth, classController.add_class);

router
  .route("/:classId")
  .get(checkAuth, classController.get_one_class)
  .delete(checkAuth, classController.remove_class);

module.exports = router;
