const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')

const app = express()

mongoose.connect('mongodb://localhost:27017/reservations', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Up and running on ${PORT}`)
})