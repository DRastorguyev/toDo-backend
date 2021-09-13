const recursive = require('recursive-readdir-sync');
const express = require('express');
require('dotenv').config();
const fs = require('fs');

const app = express();

app.use(express.json());

recursive(`${__dirname}/routes`).forEach((file) => app.use('/', require(file)));

fs.access('data.txt', (e) => {
  if (e) fs.writeFileSync('data.txt', '');
});

app.listen(process.env.PORT || 7000, () => {
  console.log(`Server has been started`);
});