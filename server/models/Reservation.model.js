const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({

})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.export = Reservation