const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const token = req.header.authorization.split(' ')[1]; // Bearer dasdasdasd

    console.log(req.header.authorization);
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизирован' });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Пользователь не авторизирован' });
  }
};