const ROUTER = require("express").Router();
const instructorControllers = require("../controllers/instructorController");

ROUTER.route("/").post(instructorControllers.register_user);

ROUTER.route("/:id").delete(instructorControllers.delete_account);

module.exports = ROUTER;
