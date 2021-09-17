const recursive = require('recursive-readdir-sync');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// Run server...

const start = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}...`)
    );
  } catch (e) {
    console.error(e);
  }
};

// Routes collector...

recursive(`${__dirname}/routes/`).forEach((file) =>
  app.use('/', require(file))
);

start();
