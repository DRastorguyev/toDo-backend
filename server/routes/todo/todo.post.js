const { todo } = require('../../models/index.js').sequelize.models;
const { Router } = require('express');

const router = Router();

router.post('/todo', async (req, res) => {
  const { title } = req.body;

  const newTodo = await todo.create({
    title,
  });

  res.send(newTodo);
});

module.exports = router;
