const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: String,
  movie: String,
  yearOfRelease: Number,
  duration: Number,
  actors: [String, String],
  poster: String,
  boxOffice: Number,
  rottenTomatoesScore: Number,
});

const Movie = mongoose.model("movies", movieSchema, "movies");


module.exports = Movie;
