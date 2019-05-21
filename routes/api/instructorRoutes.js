const ROUTER = require("express").Router();
const instructorControllers = require("../../controllers/instructorController");

ROUTER.route("/registerInstructor").post(instructorControllers.register_user);

//ROUTER.route("/:id");

module.exports = ROUTER;
