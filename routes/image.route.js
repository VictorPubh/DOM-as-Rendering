const { Router } = require('express');
const imageController = require('../controllers/image.controller');

const r = Router();

r.get('/:image\.:png?', imageController);

module.exports = r;