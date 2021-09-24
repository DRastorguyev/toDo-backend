const recursive = require('recursive-readdir-sync');
const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/authRouter.js');
require('dotenv').config();

const app = express();

app.use(express.json());

// Run server...

app.use(
  cors({
    origin: process.env.APP_ADRESS
  })
);

const start = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}...`)
    );
  } catch (e) {
    console.error(e);
  }
};

// Routes collector

recursive(`${__dirname}/routes/`).forEach((file) =>
  app.use('/', require(file))
);

// Auth router

app.use('/user', authRouter);

start();
