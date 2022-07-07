const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use('/', routes);

app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('Route not defined')));

module.exports = app;
