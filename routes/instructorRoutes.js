const router = require("express").Router();
const instructorController = require("../controllers/instructorController");
const checkAuth = require("../auth/checkAuth");

router.post("/register", instructorController.register_user);

router.post("/login", instructorController.user_login);

router.delete("/:instructorId", checkAuth, instructorController.delete_account);

module.exports = router;
