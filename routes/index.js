const path = require("path");
const router = require("express").Router();
const instructorRoutes = require("./instructorAPI");
const classRoutes = require("./classAPI");
const studentRoutes = require("./studentAPI");

router.use("/instructorapi", instructorRoutes);
router.use("/classapi", classRoutes);
router.use("/student", studentRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
