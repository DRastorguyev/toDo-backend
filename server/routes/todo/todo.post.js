const { Router } = require('express');
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

  fs.appendFile('data.txt', JSON.stringify(createTodo, null, 2), (err) => {
    if (err) throw err;
  });

  res.send(createTodo);

  console.log(createTodo);
});

module.exports = router;
