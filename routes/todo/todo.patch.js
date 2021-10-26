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
    console.log(selectedTodoId);
    console.log(targetTodoId);

    const updatedTodo = await todo.update(
      { title, done },
      { where: { id: id, user_id } }
    );
    const selectedTodo = await todo.findOne({
      where: {
        id: selectedTodoId,
      },
    });

    await todo.update(
      {
        menu_position: literal(
          `(SELECT t.menu_position FROM todos AS t WHERE t.id = ${targetTodoId})`
        ),
      },
      {
        where: {
          id: selectedTodoId,
        },
      }
    );

    await todo.update(
      {
        menu_position: selectedTodo.menu_position,
      },
      {
        where: {
          id: targetTodoId,
        },
      }
    );
    res.send(updatedTodo);
  } catch (e) {
    console.log(e.message);
  }

  async function replaceTodo(options, user_id) {
    const todos = await todo.findAll({
      where: {
        user_id,
      },
      order: [['menu_position', 'ASC']],
    });
  }
});

module.exports = router;
