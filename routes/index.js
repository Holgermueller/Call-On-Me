const path = require("path");
const router = require("express").Router();
const instructorRoutes = require("./instructorAPI");

router.use("/instructorapi", instructorRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
