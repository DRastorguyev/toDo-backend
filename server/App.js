const recursive = require('recursive-readdir-sync');
const { json } = require('express');
const express = require('express');
const sequelize = require('./db');
require('dotenv').config();

const app = express();

app.use(json());

// Run server...

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

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
