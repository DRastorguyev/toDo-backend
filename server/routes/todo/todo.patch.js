const { Router } = require('express');

const router = Router();

router.patch('/todos/:uuid', async (req, res) => {
  let todos = readTodos(); // get the elements from the array
  const fields = ['name', 'done'];
  const { uuid } = req.params;
  const editFields = {};

  const editedIndex = todos.findIndex((todo) => todo.uuid === uuid);

  try {
    fields.forEach((propertyName) => {
      if (propertyName in req.body)
        editFields[propertyName] = req.body[propertyName];
    });

    todos[editedIndex] = { ...todos[editedIndex], ...editFields };

    await writeTodo(todos);

    res.send(todos[editedIndex]);
  } catch (e) {
    if (e) console.error(e);
  }
});

module.exports = router;
