'use strict'

const express = require('express')
const app = new express.Router({ mergeParams: true })
const projectController = require('../../controllers').project
const projectValidator = require('../../validators').project
const { checkSchema } = require('express-validator/check')

const passport = require('passport')
require('./../../middlewares/passport')(passport)
const authorize = require('../../middlewares/authorize')

app.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  authorize.authorize,
  checkSchema(projectValidator.create),
  projectController.create
)

app.get(
  '/',
  projectController.list
)

app.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkSchema(projectValidator.retrieve),
  projectController.retrieve
)

app.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authorize.authorize,
  checkSchema(projectValidator.update),
  projectController.update
)

app.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authorize.authorize,
  checkSchema(projectValidator.destroy),
  projectController.destroy
)

module.exports = app
