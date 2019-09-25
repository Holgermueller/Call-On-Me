const router = require("express").Router();
const courseRoutes = require("./courseRoutes");

router.use("/course", courseRoutes);

module.exports = router;
