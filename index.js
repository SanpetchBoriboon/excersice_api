const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const HttpStatus = require("http-status");
const morgan = require("morgan");

const { USERNAME, PASSWORD, DATABASE, PORT } = require("./config");

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.isd57.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.info("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.info("[failed] task 2 " + error);
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

const port = PORT || 5000;

app.listen(port, () => {
  console.info("[success] task 1 : listening on port " + port);
});

app.get("/ping", (req, res) => {
  try {
    res.status(HttpStatus.OK).send({ message: "pong" });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).send(error);
  }
});
