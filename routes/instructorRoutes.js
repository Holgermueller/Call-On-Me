const router = require("express").Router();
const instructorController = require("../controllers/instructorController");
const checkAuth = require("../auth/checkAuth");

router.route("/register").post(instructorController.register_instructor);

router.post("/login", function(req, res) {
  instructorController.user_login;
});

router
  .route("/:instructorId")
  .delete(checkAuth, instructorController.delete_instructor);

module.exports = router;
