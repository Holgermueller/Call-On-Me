const router = require("express").Router();
const classRoutes = require("./classRoutes");

router.use("/class", classRoutes);

module.exports = router;
