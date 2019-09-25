const path = require("path");
const router = require("express").Router();
const instructorRoutes = require("./instructorAPI");
const classRoutes = require("./courseAPI");
const studentRoutes = require("./studentAPI");

router.use("/instructorapi", instructorRoutes);
router.use("/courseapi", classRoutes);
router.use("/studentapi", studentRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
