const mongoose = require('mongoose')
const Shcema = mongoose.Schema

const reservationSchema = new Schema({

})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.export = Reservation