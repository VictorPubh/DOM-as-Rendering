const express = require('express');
const helmet = require('helmet');
const { ErrorResponseObject } = require('./common/http');
const routes = require('./routes');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use('/', routes);

app.use(express.static('assets'));

app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('Route not defined')));
app.listen(3000, () => {
    console.log('Available on: http://localhost:3000')
})

module.exports = app;
