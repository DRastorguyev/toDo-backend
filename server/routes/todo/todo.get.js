const { Router } = require('express');
const { todo } = require('../../models/index.js');

const router = Router();

router.get('/todos', async (req, res) => {
  const todos = await todo.findAll();

  if (!todos) {
    return res.status(400).send({
      message: 'Not found',
    });
  }

  res.send(todos);
});

module.exports = router;
