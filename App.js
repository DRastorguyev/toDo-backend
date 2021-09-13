// 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 => personal access token
const express = require('express');
const postRoutes = require('./routes/todo/todo.post.js')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', postRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}...`);
});
