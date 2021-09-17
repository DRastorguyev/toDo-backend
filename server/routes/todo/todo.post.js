const { Router } = require('express');
const express = require('express');
const {user} = require('../../models/index.js').sequelize.models;

const router = Router();

router.post('/todo', async (req, res) => {

  const { name } = req.body;

  const newTodo = await user.create({
    name,
  });

  res.send(newTodo);
});

module.exports = router;