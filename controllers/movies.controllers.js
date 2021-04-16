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

const { Movie } = require("../models");

const getMovieList = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await Movie.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(movieDetail);
    if (movieDetail) {
      res.status(200).send(movieDetail);
    } else {
      res.status(404).send(`Not Found`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovie = async (req, res) => {
  const { name, trailer, poster, descriptions, startTime, evaluate } = req.body;
  try {
    const newMovie = await Movie.create({ name, trailer, poster, descriptions, startTime, evaluate });
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, trailer, poster, descriptions, startTime, evaluate } = req.body;
  try {
    let movieUpdate = await Movie.findOne({
      where: {
        id,
      },
    });
    if (movieUpdate) {
      movieUpdate.name = name;
      movieUpdate.trailer = trailer;
      movieUpdate.poster = poster;
      movieUpdate.descriptions = descriptions;
      movieUpdate.startTime = startTime;
      movieUpdate.evaluate = evaluate;
      await movieUpdate.save();
      res.status(200).send(movieUpdate);
    } else {
      res.status(404).send(`Not Found!`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    let movieDelete = await Movie.findOne({
      where: {
        id,
      },
    });
    if (movieDelete) {
      Movie.destroy({
        where: {
          id,
        },
      });
      res.status(200).send(movieDelete);
    } else {
      res.status(404).send(`Not Found!`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  deleteMovie,
};
