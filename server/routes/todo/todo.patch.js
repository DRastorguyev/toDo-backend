const { Router } = require('express');
const { todo } = require('../../models/index.js').sequelize.models;

const router = Router();

router.patch('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { editedTitle } = req.body;
  const { condition } = req.body;

  try {
    const updatedTodo = await todo.update(
      { name: editedTitle, done: condition },
      { where: { id: id } }
    );
    res.send(updatedTodo);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
