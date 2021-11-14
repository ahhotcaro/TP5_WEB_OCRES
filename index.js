// MongoDB
require("./db.js")

const express = require("express");
const {
  getMovies,
  getMoviesId,
  putMovies,
  postMoviesId,
  deleteMoviesId,
} = require("./router");
const port = 3000;

const app = express();
app.use(express.json());

app.get("/movies", getMovies);
app.get("/movies/:id", getMoviesId);
app.put("/movies", putMovies);
app.post("/movies/:id", postMoviesId);
app.delete("/movies/:id", deleteMoviesId);

app.listen(port, () => {
  console.log(`Server up on http://localhost:${port}`);
});
