const express = require("express");
const movieRouters = express.Router();
const {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");
const { logger } = require("../middlewares/logger.middlerwares");
const { checkEmty, checkNameLength } = require("../middlewares/movie-validations.middlewares");
/**
 * RestFul APIs
 */
/** lấy danh sách phim */
movieRouters.get("/", logger, getMovieList);
/** lấy chi tiết phim */
movieRouters.get("/:id", getMovieDetail);
/** thêm phim */
movieRouters.post("/", checkEmty, checkNameLength(10, 100), createMovie);
/** cập nhật phim */
movieRouters.put("/:id", updateMovie);
/** xóa phim */
movieRouters.delete("/:id", deleteMovie);

module.exports = {
  movieRouters,
};
