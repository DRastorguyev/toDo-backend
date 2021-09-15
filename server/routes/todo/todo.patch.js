const { readTodos, writeTodo } = require('../../FuncModel');
const { Router } = require('express');

const router = Router();

router.patch('/todos/:uuid', (req, res) => {
  let todos = readTodos(); // get the elements from the array
  const data = ['name', 'done'];
  const { uuid } = req.params;
  const editData = {};
  
  const editIndex = todos.findIndex(todo => todo.uuid === uuid);

  try {
    data.forEach(propertyName => {
      if (propertyName in req.body) {
        editData[propertyName] = req.body[propertyName];
      }
    });
    
    todos[editIndex] = { ...todos[editIndex], ...editData };

    writeTodo(todos);

    res.send(todos[editIndex]);
  } catch (e) {
    if (e) console.error(e);
  }
});

module.exports = router;
