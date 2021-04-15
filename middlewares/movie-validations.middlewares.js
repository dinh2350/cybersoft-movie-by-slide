const checkEmty = (req, res, next) => {
  const { name, trailer, poster, descriptions, startTime, evaluate } = req.body;
  if (name && trailer && poster && descriptions && startTime && evaluate) {
    next();
  } else {
    res.status(400).send(`dữ liệu gửi lên không được rỗng`);
  }
};

const checkNameLength = (min = 5, max = 50) => (req, res, next) => {
  const { name } = req.body;
  if (name.length > min && name.length < max) {
    next();
  } else {
    res.status(400).send(`độ dài phải từ ${min} - ${max}`);
  }
};

module.exports = {
  checkEmty,
  checkNameLength,
};
