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




// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/exercise", function (req, res) {
//   res.sendFile(__dirname + "/public/exercise.html");
// });

// app.get("/stats", function (req, res) {
//   res.sendFile(__dirname + "/public/stats.html");
// });

app.post("/api/workouts", function (req, res) {
  // console.log(req.body.name);
  // res.send(`request got sent ${req.body.name}`);
  console.log(req.body);
});

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
