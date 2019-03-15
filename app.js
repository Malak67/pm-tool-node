'use strict'

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const api = require('./server/routes')
// Set up the express app
const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Enable CORS from client-side
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize())

// CORS so other websites can make requests to this server
app.use(cors())

// API
app.use('/api', api)

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || status.INTERNAL_SERVER_ERROR)
//   res.render('error')
// })

module.exports = app
