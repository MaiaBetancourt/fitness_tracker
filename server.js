const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
let db = require("./models");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

const apiRoutes = require("./routes/api.js");

app.use("/api", apiRoutes);
app.use(require("./routes/html.js"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
