const logger = (req, res, next) => {
  console.log(`đây là tính năng lấy danh sách phim`);
  next();
};

module.exports = {
  logger,
};
