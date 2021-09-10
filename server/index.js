const recursive = require('recursive-readdir-sync');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

fs.access('data.txt', (e) => {
  if (e) fs.writeFileSync('data.txt', '')
})

app.listen(process.env.PORT, () => {
  console.log(`Server has been started`);
})