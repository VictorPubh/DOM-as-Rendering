const { Router } = require('express');
const iconController = require('../controllers/icon.controller');

const r = Router();

r.get('/:image\.:png?', iconController);

module.exports = r;
