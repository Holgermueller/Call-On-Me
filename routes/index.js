const PATH = require("path");
const ROUTER = require("express").Router();
const instructorAPI = require("./instructor");
const studentAPI = require("./student");
const classAPI = require("./class");

ROUTER.use("/instructorAPI", instructorAPI);
ROUTER.use("/studentAPI", studentAPI);
ROUTER.use("/classAPI", classAPI);

ROUTER.use((req, res) => {
  res.sendFile(PATH.join(__dirname, "../client/build/index.html"));
});

module.exports = ROUTER;
