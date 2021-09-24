const { Router } = require('express');
const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');

const router = Router();

router.patch('/todos/:id', authMiddlware, async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { done } = req.body;

  try {
    const updatedTodo = await todo.update(
      { title, done },
      { where: { id: id, user_id: res.locals.user.id } }
    );
    res.send(updatedTodo);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
