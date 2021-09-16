const { Router } = require('express');
const { readTodos } = require('../../FuncModel');

const router = Router();

router.get('/todos', (req, res) => {
  res.send(readTodos())
});


module.exports = router;