const app = require("express").Router();
const db = require("../models");

app.get("/api/workouts", async function (req, res) {
    res.json(await db.Workout.find());
});

app.post("/api/workouts", function (req, res) {
    // console.log(req.body.name);
    // res.send(`request got sent ${req.body.name}`);
    console.log(req.body);

  });