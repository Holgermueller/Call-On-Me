const PATH = require("path");
const ROUTER = require("express").Router();
const instructorAPI = require("./instructor");

ROUTER.use("/instructorAPI", instructorAPI);

ROUTER.use((req, res) => {
  res.sendFile(PATH.join(__dirname, "../client/build/index.html"));
});

module.exports = ROUTER;
