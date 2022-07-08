const { Router } = require('express');
const generatorController = require('../controllers/generator.controller')

const r = Router();

r.get('/:element\.:png?', generatorController);

module.exports = r;
