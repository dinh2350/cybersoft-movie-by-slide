/**
 * data
 */
let moviesList = [
  {
    id: 1,
    name: "avengers endgame",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3EZxv7qT_YCq3u0aBkIfz_mz3lINP7I8MF0ptNDEUEyE0yC3a",
    descriptions: "phim này hay lắm",
    ngayKhoiChieu: "2021-04-09 11:38:17",
    danhGia: 9,
  },
  {
    id: 2,
    name: "Iron Man 1",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3EZxv7qT_YCq3u0aBkIfz_mz3lINP7I8MF0ptNDEUEyE0yC3a",
    descriptions: "xem là ghiền",
    ngayKhoiChieu: "2021-04-09 11:38:17",
    danhGia: 8.5,
  },
];

const getMovieList = (req, res) => {
  if (moviesList) {
    res.status(200).send(moviesList);
  } else {
    res.status(404).send(`Not Found!`);
  }
};
const getMovieDetail = (req, res) => {
  const { id } = req.params;
  const movieDetail = moviesList.find((movie) => movie.id == id);
  res.status(200).send(movieDetail);
  if (movieDetail) {
    res.status(200).send(movieDetail);
  } else {
    res.status(404).send(`Not Found!`);
  }
};
const createMovie = (req, res) => {
  const { name, trailer, poster, descriptions, startTime, evaluate } = req.body;
  const newMovie = { id: Math.random(), name, trailer, poster, descriptions, startTime, evaluate };
  moviesList = [...moviesList, newMovie];
  res.status(201).send(newMovie);
};
const updateMovie = (req, res) => {
  // lấy data từ client
  const { id } = req.params;
  const { name, trailer, poster, descriptions, startTime, evaluate } = req.body;
  // update movie
  const index = moviesList.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    const oldMovie = moviesList[index];
    const updateMovie = { ...oldMovie, name, trailer, poster, descriptions, startTime, evaluate };
    moviesList[index] = updateMovie;
    res.status(200).send(updateMovie);
  } else {
    res.status(404).send(`Not Found!`);
  }
};
const deleteMovie = (req, res) => {
  const { id } = req.params;
  const index = moviesList.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    const movieDelete = moviesList[index];
    moviesList.splice(index, 1);
    res.status(200).send(movieDelete);
  } else {
    res.status(404).send(`Not Found!`);
  }
};

module.exports = {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  deleteMovie,
};
