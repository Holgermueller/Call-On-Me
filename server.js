const EXPRESS = require("express");
const COMPRESSION = require("compression");
const BODYPARSER = require("body-parser");
const CORS = require("cors");
const PATH = require("path");
const MORGAN = require("morgan");
const MONGOOSE = require("mongoose");

const APP = EXPRESS();
const PORT = process.env.PORT || 8081;

APP.use(MORGAN("tiny"));

if (process.env.NODE_ENV === "production") {
  APP.use(EXPRESS.static(PATH.join(__dirname, "client/build")));
}

APP.use(CORS());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());
APP.use(COMPRESSION());

APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "./client/build", "index.html"));
});

APP.listen(PORT, () => {
  console.log(`==> API server now listening on PORT ${PORT}`);
});
