const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { MONGODB_URL } = require("./config");

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true }).then(
  () => {
    console.info("[success] connected to the database ");
  },
  (error) => {
    console.info("[failed] connected " + error);
    process.exit();
  }
);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

const group = require("./src/routes/group.route");
const member = require("./src/routes/member.route");

app.use("/api/group", group);
app.use("/api/member", member);

module.exports = app;
