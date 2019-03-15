const express = require('express')
const api = new express.Router(({ mergeParams: true }))

// API
const user = require('./user')
const project = require('./project')

api.use('/', user)
api.use('/project', project)

module.exports = api
