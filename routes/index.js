const path = require("path");
const router = require("express").Router();
const instructorRoutes = require("./instructorAPI");
const courseRoutes = require("./courseAPI");
const studentRoutes = require("./studentAPI");

router.use("/instructorapi", instructorRoutes);
router.use("/courseapi", courseRoutes);
router.use("/studentapi", studentRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
