const recursive = require('recursive-readdir-sync');
const express = require('express');
const { json } = require('express');
require('dotenv').config();

const app = express();
app.use(json())

recursive(`${__dirname}/routes/`).forEach((file) =>
  app.use('/', require(file))
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}...`);
});
