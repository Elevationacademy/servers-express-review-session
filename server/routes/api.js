const express = require('express')
const router = express.Router()
const Reservation = require('../models/Reservation.model')

router.get('/sanity', (req, res) => {
  res.send('All good!')
})

// Create a new reservation
router.post('/reservations', (req, res) => {
  const reservation = new Reservation({ ...req.body, isComplete: false })

  reservation
    .save()
    .then(reservation => {
      res.send(reservation)
    })
    .catch(err => {
      res.send(err)
    })
})

// Get all reservations
router.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find({})
    res.send(reservations)
  } catch (error) {
    res.send(error)
  }
})

// Delete a reservation
router.delete('/reservations/:resId', async (req, res) => {
  const { resId } = req.params

  const reservation = await Reservation.findByIdAndDelete(resId)
  res.send(reservation)
})

// Update a reservation
router.put('/reservations/:resId', async (req, res) => {
  const { resId } = req.params
  const { property, value } = req.body

  const reservation = await Reservation
    .findByIdAndUpdate(resId, { [property]: value }, { new: true })
  res.send(reservation)
})

module.exports = router