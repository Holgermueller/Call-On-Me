const PATH = require("path");
const ROUTER = require("express").Router();
const instructorApiRoutes = require("./api/instructorRoutes");
const studentApiRoutes = require("./api/studentRoutes");
const classApiRoutes = require("./api/classRoutes");

ROUTER.use("/api", instructorApiRoutes);

ROUTER.use((req, res) => {
  res.sendFile(PATH.join(__dirname, "../client/build/index.html"));
});

module.exports = ROUTER;
