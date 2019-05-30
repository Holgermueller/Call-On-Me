const router = require("express").Router();
const instructorController = require("../controllers/instructorController");

router.route("/register").post(instructorController.register_user);

//router.post("/login", instructorController.user_login);

router.route("/:instructorId").delete(instructorController.delete_account);

module.exports = router;
