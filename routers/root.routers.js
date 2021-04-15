const express = require("express");
const rootRouters = express.Router();
const { movieRouters } = require("../routers/movie.routers");

rootRouters.use("/movies", movieRouters);

module.exports = {
  rootRouters,
};
