const { readTodos, writeTodo } = require('../../FuncModel');
const { Router } = require('express');

const router = Router();

router.patch('/todos', (req, res, next) => {
  const name = req.params.name;
});

module.exports = router;
