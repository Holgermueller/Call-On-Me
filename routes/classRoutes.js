const router = require("express").Router();
const classController = require("../controllers/classController");
const checkAuth = require("../auth/checkAuth");

router.get("/", checkAuth, classController.get_all_classes);

router.post("/", checkAuth, classController.add_class);

router.get("/:classId", checkAuth, classController.get_one_class);

router.delete("/:classId", checkAuth, classController.remove_class);

module.exports = router;
