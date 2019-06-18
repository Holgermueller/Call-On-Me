const router = require("express").Router();
const instructorController = require("../controllers/instructorController");
const checkAuth = require("../auth/checkAuth");

router.route("/register").post(instructorController.register_user);

router.post("/login", function(req, res) {
  instructorController.user_login;
});

router
  .route("/:instructorId")
  .delete(checkAuth, instructorController.delete_account);

module.exports = router;
