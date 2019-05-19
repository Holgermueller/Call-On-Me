const ROUTER = require("express").Router();
const callOnMeRoutes = require("./routes");

ROUTER.use("/callOnMeRoutes", callOnMeRoutes);

module.exports = ROUTER;
