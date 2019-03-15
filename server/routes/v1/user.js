'use strict'

const express = require('express')
const app = new express.Router({ mergeParams: true })
const userController = require('../../controllers').user
const userValidator = require('../../validators').user
const { checkSchema } = require('express-validator/check')

const passport = require('passport')
require('./../../middlewares/passport')(passport)
const authorize = require('../../middlewares/authorize')

app.post(
  '/login',
  checkSchema(userValidator.login),
  userController.login
)

app.post(
  '/register',
  checkSchema(userValidator.register),
  userController.register
)

app.get(
  '/user',
  passport.authenticate('jwt', { session: false }),
  authorize.authorize,
  userController.list
)

app.get(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkSchema(userValidator.retrieve),
  userController.retrieve
)

app.put(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkSchema(userValidator.update),
  userController.update
)

app.delete(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkSchema(userValidator.destroy),
  userController.destroy
)

module.exports = app
