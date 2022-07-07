const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const generator = require('./generator.route');

const r = Router();

r.use('/', generator);

module.exports = r;
