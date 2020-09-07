const express = require('express')
const router = express.Router()
const Reservation = require('../models/Reservation.model')

router.get('/sanity', (req, res) => {
  res.send('All good!')
})

module.exports = router