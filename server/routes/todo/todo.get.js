const { Router } = require('express');
const { readTodos } = require('../../TodoModel');

const router = Router();

router.get('/', (req, res) => {
  res.send(readTodos())
});


module.exports = router;