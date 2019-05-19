const ROUTER = require("express").Router();
const instructorRoutes = require("./routes");

ROUTER.use("/instructorRoutes", instructorRoutes);

module.exports = ROUTER;
