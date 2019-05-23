const instructorRouter = require("express").Router();
const instructorRoutes = require("./instructorRoutes");

instructorRouter.use("/instructor", instructorRoutes);

module.exports = instructorRouter;
