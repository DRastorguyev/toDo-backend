const express = require('express');
const postRoutes = require('./routes/todo/todo.post.js');
const getRoutes = require('./routes/todo/todo.get.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', postRoutes);
app.use('/todos', getRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}...`);
});


