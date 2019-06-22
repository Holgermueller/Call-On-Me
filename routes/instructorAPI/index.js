const router = require("express").Router();
const instructorRoutes = require("./instructorRoutes");

router.use("/instructor", instructorRoutes);

module.exports = router;
