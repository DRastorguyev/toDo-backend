const { Router } = require('express');
const { readTodos, writeTodo } = require('../../TodoModel');
const { v4 } = require('uuid');
const fs = require('fs');

const router = Router();

router.post('/', async (req, res) => {
  const { name } = req.body;

  const createTodo = {
    uuid: v4(),
    name,
    done: false,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  const data = await readTodos();

  data.push(createTodo);

  writeTodo(data);

  res.send(createTodo);
});


module.exports = router;