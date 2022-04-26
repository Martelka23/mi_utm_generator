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

app.use('/api/info', infoRouter);
app.use('/api/params', paramsRouter);
app.use('/api/sources', sourcesRouter);

app.get('/api/test', (req, res) => {
  res.json({test: true});
});

app.listen(PORT, () => console.log('Server started'));