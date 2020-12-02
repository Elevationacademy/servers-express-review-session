const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
  name: String,
  numPeople: Number,
  date: Date,
  isComplete: Boolean
})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation