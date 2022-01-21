const express = require('express')
const router = express.Router()
const { getListGuest, createGuest } = require('./controller')

router.get('', getListGuest)
router.post('', createGuest)

module.exports = router
