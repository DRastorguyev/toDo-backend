const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');
const { literal } = require('sequelize');

const { Router } = require('express');

const router = Router();

router.post('/todo', authMiddlware, async (req, res) => {
  const { title } = req.body;
  const user_id = res.locals.user.id;

  try {
    const newTodo = await todo.create({
      title,
      user_id,
      menu_position: literal(
        `COALESCE((SELECT max(t.menu_position) FROM todos AS t WHERE t.user_id = ${user_id}), 0) + 1`
      ),
    });
     
    res.send(newTodo);
  } catch (e) {
    console.error({ message: e });
  }
});

module.exports = router;
