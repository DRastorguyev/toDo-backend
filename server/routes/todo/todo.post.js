const { Router } = require('express');
const { readTodos, writeTodo } = require('../../FuncModel');
const { v4 } = require('uuid');


const router = Router();

router.post('/todo', async (req, res) => {

  const { name } = req.body;

  const newTodo = {
    uuid: v4().slice(0, 4),
    name,
    done: false,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  const todos = await readTodos();
  
  todos.push(newTodo);
  
  writeTodo(todos);

  res.send(newTodo);
});


module.exports = router;