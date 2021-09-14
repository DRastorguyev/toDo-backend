const { readTodos, writeTodo } = require('../../FuncModel.js');
const { Router } = require('express');

const router = Router();

router.delete('/rmtodo/:uuid', (req, res) => {

  let todos = readTodos();

  todos = todos.filter((todo) => todo.uuid !== req.params.uuid);

  writeTodo(todos);

  res.send(todos)

});

module.exports = router;
