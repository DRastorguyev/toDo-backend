const express = require('express');
const router = express();
const Todo = require('../../model/Todo');
const { v4 } = require('uuid');

module.exports = router.post(
  '/todo',

  async (req, res, next) => {
    const { name } = req.body;

    const newTodo = {
      uuid: v4(),
      name,
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const todos = await Todo.getTodos();
    todos.push(newTodo);

    Todo.saveTodos(todos);

    res.json(newTodo);
  }
);
