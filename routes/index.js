const PATH = require("path");
const ROUTER = require("express").Router();
const apiRoutes = require("./api");

ROUTER.use("/api", apiRoutes);

ROUTER.use((req, res) => {
  res.sendFile(PATH.join(__dirname, "../client/build/index.html"));
});

module.exports = ROUTER;
