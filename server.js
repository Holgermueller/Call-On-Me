const EXPRESS = require("express");
const COMPRESSION = require("compression");
const BODYPARSER = require("body-parser");
const CORS = require("cors");
const PATH = require("path");
const MORGAN = require("morgan");
const MONGOOSE = require("mongoose");
const routes = require("./routes");

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
MONGOOSE.set("useFindAndModify", false);
MONGOOSE.set("useCreateIndex", true);
MONGOOSE.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/callOnMeDB",
  { useNewUrlParser: true }
);
const CONNECTION = MONGOOSE.connection;
CONNECTION.once("open", () => {
  console.log("db connection!");
});

APP.use("/", routes);

APP.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

APP.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "./client/build", "index.html"));
});

APP.listen(PORT, () => {
  console.log(`==> API server now listening on PORT ${PORT}`);
});
