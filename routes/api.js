const app = require("express").Router();
const db = require("../models");

app.get("/api/workouts", async function (req, res) {
  res.json(await db.Workout.find());
});

app.get("/api/workouts/range", async function (req, res) {
  res.json(await db.Workout.find().limit(7));
});

app.post("/api/workouts", async function (req, res) {
  // console.log(req.body.name);
  // res.send(`request got sent ${req.body.name}`);
  console.log(req.body);
  res.json(await db.Workout.create(req.body));
});

app.put("/api/workouts/:id", async function (req, res) {
  res.json(
    await db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
  );
});

module.exports = app;
