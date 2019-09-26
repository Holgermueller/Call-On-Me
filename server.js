const EXPRESS = require("express");
const COMPRESSION = require("compression");
const BODYPARSER = require("body-parser");
const CORS = require("cors");
const PATH = require("path");
const MORGAN = require("morgan");
const routes = require("./routes");
const db = require("./config/config");

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

APP.use("/", routes);

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log("Error" + err));

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
