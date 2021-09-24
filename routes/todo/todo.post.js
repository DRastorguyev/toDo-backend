const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');

const { Router } = require('express');

const router = Router();

router.post('/todo', authMiddlware, async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await todo.create({
      title,
      user_id: res.locals.user.id,
    });

    res.send(newTodo);
  } catch (e) {
    console.error({ message: e });
  }
});

module.exports = router;
