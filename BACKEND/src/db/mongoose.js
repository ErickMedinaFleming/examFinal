const mongoose = require('mongoose')

const connect = require('../models/config.js')

// revisa tu connectionURL aqui :-)
const connectionURL = process.env.connectURL || connect.connectionURL



mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
