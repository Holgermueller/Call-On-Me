const router = require("express").Router();
const classController = require("../../controllers/classController");
const checkAuth = require("../../auth/checkAuth");

router
  .route("/")
  .get( classController.get_all_classes)
  .post( classController.add_class);

router
  .route("/:classId")
  .get( classController.get_one_class)
  .delete( classController.remove_class);

module.exports = router;
