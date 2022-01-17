const path = require('path');

const cors = require('cors');
const express = require('express');
require('dotenv').config({ path: './.env' });

const infoRouter = require('./routes/infoRouter.js');
const paramsRouter = require('./routes/paramsRouter.js');
const sourcesRouter = require('./routes/sourcesRouter.js');


const PORT = process.env.PORT;

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use('/info', infoRouter);
app.use('/params', paramsRouter);
app.use('/sources', sourcesRouter);

app.get('/test', (req, res) => {
  res.json({test: true});
});

async function start() {
  app.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));
}


start();