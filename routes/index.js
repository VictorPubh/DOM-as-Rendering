const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const generator = require('./generator.route');
const icon = require('./icon.route');
const image = require('./image.route');

const r = Router();

r.use('/custom', generator);
r.use('/icon', icon);
r.use('/image', image);

module.exports = r;