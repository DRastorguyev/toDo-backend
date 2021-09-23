const { user } = require('../models/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwt = (email, id) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

const registration = async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await user.findOne({ where: { email } });

    if (candidate) {
      return res.status(400).json('Пользователь с такой почтой уже существует');
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const User = await user.create({ email, password: hashPassword });

    const token = generateJwt(User.email, User.id);

    return res.json({ token });
  } catch (e) {
    res.status(400).send('Registration error');
  }
};

const login = async (req, res) => {
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

    const token = generateJwt(User.email, User.id);

    return res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(400).send('Login error');
  }
};

const check = async (req, res) => {
  try {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token });
  } catch (e) {}
};

module.exports = {
  registration,
  login,
  check
};
