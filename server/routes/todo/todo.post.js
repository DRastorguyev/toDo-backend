const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');

const { Router } = require('express');

const router = Router();

router.post('/todo', authMiddlware, async (req, res) => {
  const { title } = req.body;

  const newTodo = await todo.create({
    title,
    user_id: req.user.id
  });

  res.send(newTodo);
});

module.exports = router;
