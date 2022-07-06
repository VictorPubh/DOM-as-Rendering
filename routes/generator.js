const express = require('express')

const router = express.Router()
const generatorController = require('../controllers/generator')

router.get('/element', generatorController.getElement)

module.exports = router