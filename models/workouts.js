const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "String is Required",
        },

        type: {
          type: String,
          trim: true,
          required: "String is required",
        },

        duration: Number,

        weight: Number,

        reps: Number,

        sets: Number,

        distance: Number,
      },
    ],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
