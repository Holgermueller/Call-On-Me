const ROUTER = require("express").Router();
const controller = require("../../controllers/instructorController");

ROUTER.route("/").post(controller.register_instructor);

ROUTER.route("/:id");

module.exports = ROUTER;
