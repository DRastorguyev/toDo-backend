const { user } = require('../models/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwt = (email, id, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class authContoller {
  async registration(req, res) {
    try {
      const { email, password, role } = req.body;

      const hashPassword = await bcrypt.hash(password, 5);

      const User = await user.create({ email, role, password: hashPassword });

      const token = generateJwt(User.id, User.email, User.role);

      return res.json({ token });
    } catch (e) {
      console.error(e);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const User = await user.findOne({ where: { email } });
      if (!User) {
        res.status(400).send('Пользователь не найден');
      }

      let comparePassword = bcrypt.compareSync(password, User.password);
      if (!comparePassword) {
        res.status(400).send('Ошибка авторизации');
      }

      const token = generateJwt(User.id, User.email, User.role);

      return res.json({ token });
    } catch (e) {
      console.error(e);
      res.status(400).send('Login error');
    }
  }

  async getUsers(req, res) {
    try {
      res.send('Hello');
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new authContoller();
