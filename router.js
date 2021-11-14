// Movie mongodb schema
const Movie = require("./schema/movie.schema")

const getMovies = async (req, res) => {
  const movies =  await Movie.find();
  res.send(movies);
};
const getMoviesId = (req, res) => {
  const id = req.params.id; 
  res.send("get Movies " + id);
};
const putMovies = async (req, res) => {
  const movie = req.body;
  try {
    const setMovie = new Movie(movie);
    const setNewMovie = setMovie.save();
    res.send(setNewMovie);
  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
};
const postMoviesId = (req, res) => {
  const id = req.params.id; 
  res.send("POST Movies " + id);
};
const deleteMoviesId = (req, res) => {
  const id = req.params.id; 
  res.send("DELETE Movies " + id);
};

module.exports = {
  getMovies,
  getMoviesId,
  putMovies,
  postMoviesId,
  deleteMoviesId,
};
