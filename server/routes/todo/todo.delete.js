const express = require('express');
const router = express();
const Todo = require('../../model/Todo');

module.exports = router.delete(
  '/todo/:id',

  async (req, res, next) => {
    let todos = await Todo.getTodos();

    const { id } = req.params;

    todos = todos.filter((todo) => todo.uuid !== id);

    await Todo.saveTodos(todos);

    res.status(204).json();
  }
);
