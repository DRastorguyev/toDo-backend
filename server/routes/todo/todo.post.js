const { Router } = require('express');
const express = require('express');

const router = Router();

router.post('/todo', async (req, res) => {
  const { name } = req.body;

  const newTodo = {
    id: res.locals.user.id,
    name,
  };

  res.send(newTodo);
});

module.exports = router;
