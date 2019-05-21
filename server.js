const EXPRESS = require("express");
const COMPRESSION = require("compression");
const BODYPARSER = require("body-parser");
const CORS = require("cors");
const PATH = require("path");
const MORGAN = require("morgan");
const MONGOOSE = require("mongoose");
const instructorRoutes = require("./routes/instructorRoutes");
const studentRoutes = require("./routes/studentRoutes");
const classRoutes = require("./routes/classRoutes");

const APP = EXPRESS();
const PORT = process.env.PORT || 8081;

APP.use(MORGAN("dev"));

if (process.env.NODE_ENV === "production") {
  APP.use(EXPRESS.static(PATH.join(__dirname, "client/build")));
}

APP.use(CORS());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());
APP.use(COMPRESSION());

MONGOOSE.Promise = global.Promise;
MONGOOSE.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/callOnMeDB",
  { useNewUrlParser: true }
);
const CONNECTION = MONGOOSE.connection;
CONNECTION.once("open", () => {
  console.log("db connection!");
});

APP.use("/instructor", instructorRoutes);
APP.use("/student", studentRoutes);
APP.use("/class", classRoutes);

APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "./client/build", "index.html"));
});

APP.listen(PORT, () => {
  console.log(`==> API server now listening on PORT ${PORT}`);
});
