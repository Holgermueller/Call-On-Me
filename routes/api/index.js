const ROUTER = require("express").Router();
const ROUTES = require("./routes");

ROUTER.use("/comRoutes", ROUTES);

module.exports = ROUTER;
