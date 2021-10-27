const { Router } = require('express');
const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');
const { literal } = require('sequelize');

const router = Router();

router.patch('/todos/:id', authMiddlware, async (req, res) => {
  const { id } = req.params;
  const user_id = res.locals.user.id;
  const { title, done, selectedTodoId, targetTodoId } = req.body;

  try {
    const updatedTodo = await todo.update(
      { title, done },
      { where: { id: id, user_id } }
    );

    
    res.send(updatedTodo);
  } catch (e) {
    console.error(e.message);
  }
});

module.exports = router;
