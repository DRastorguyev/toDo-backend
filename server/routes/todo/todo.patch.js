const { readTodos, writeTodo } = require('../../FuncModel');
const { Router } = require('express');

const router = Router();

router.patch('/todos/:uuid', async (req, res) => {
  let todos = readTodos(); // get the elements from the array
  const data = ['name', 'done'];
  const { uuid } = req.params;
  const editData = {};

  const editedIndex = todos.findIndex((todo) => todo.uuid === uuid);

  try {
    data.forEach((propertyName) => {
      if (propertyName in req.body)
        editData[propertyName] = req.body[propertyName];
    });
    todos[editedIndex] = { ...todos[editedIndex], ...editData };
    await writeTodo(todos);
    res.send(todos[editedIndex]);
  } catch (e) {
    if (e) console.error(e);
  }
});

module.exports = router;
