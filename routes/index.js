const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get('/', Controller.home)
router.get('/species', Controller.species)


module.exports = router