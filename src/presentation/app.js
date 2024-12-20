const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {
  badRequestMiddleware,
  anyErrorMiddleware,
  corsMiddleware
} = require('../infrastructure/middlewares');
const { emailRoutes } = require('../infrastructure/routes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(corsMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1/emails', emailRoutes);

app.use(badRequestMiddleware);
app.use(anyErrorMiddleware);

module.exports = app;
