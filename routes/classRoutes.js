const ROUTER = require("express").Router();
const classControllers = require("../controllers/classController");

ROUTER.route("/")
  .post(classControllers.add_class)
  .get(classControllers.get_all_classes);

ROUTER.route("/:id")
  .get(classControllers.get_one_class)
  .delete(classControllers.remove_class);

module.exports = ROUTER;
