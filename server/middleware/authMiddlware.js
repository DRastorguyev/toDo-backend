const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer dasdasdasd
    
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизирован' });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    res.locals.user = decodedToken;

    next();
  } catch (e) {
    res.status(401).json({ message: 'Пользователь не авторизирован' });
  }
};
