const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');

const app = express();

const router = Router();

app.use(express.json());

router.post('/', async (req, res) => {
  const { name } = req.body;

  const createTodo = {
    uuid: uuidv4(),
    name,
    done: false,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  fs.appendFile('data.txt', JSON.stringify(createTodo), (req, res) => {
    console.log('hello');
  });

  res.send(createTodo);

  console.log(createTodo);
});

module.exports = router;
