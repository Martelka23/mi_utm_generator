const path = require('path');

const express = require('express');
require('dotenv').config({ path: './.env' });

const utmRouter = require('./routes/utm.js');


const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/utm', utmRouter);

async function start() {
  app.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));
}


start();