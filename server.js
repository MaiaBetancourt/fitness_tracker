const express = require("express");
const logger = require("morgan");

const app = express();
const PORT = 8080;

// const animals = [
//   {
//     name: "Deku",
//     age: "2",
//     cuteness: "10",
//   },
// ];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger("dev"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// GET - /api/animals
// View all animals
// app.get("/api/animals", function (req, res) {
//   res.json(animals);
// });

// GET - /api/animals/:name
// Search for a specific animal
// app.get("/api/animals/:name", function (req, res) {
//   const { name } = req.params;
//   for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];
//     if (animal.name.toLowerCase() === name.toLowerCase())
//       return res.json(animal);
//   }
//   return res.status(404).send("Can not find the animal you were looking for!");
// });

// Add an animal
// POST - /api/animals
// name - String - UID
// age - Number
// cuteness - Number
// app.post("/api/animals", function(req, res){
//   const animal = req.body;
//   animals.push(animal);
//   res.json(animal);
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

