'use strict'

const User = require('../models').User
const { validationResult } = require('express-validator/check')
const status = require('../enums/statusCodes').STATUS_CODES
const authService = require('../services/auth.service')
module.exports = {

  login (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    const body = req.body
    return authService.authUser(body)
      .then(user => {
        console.log(user)
        if (user) {
          return user.getJWT()
            .then(jwt => {
              const response = {
                message: 'Login successful',
                user: user,
                token: jwt
              }
              return res.status(status.OK).send(response)
            })
            .catch(error => res.status(status.BAD_REQUEST).send(error))
        }
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  register (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    const body = req.body
    return authService.createUser(body, false)
      .then(user => {
        if (user) {
          return user.getJWT()
            .then(jwt => {
              const response = {
                message: 'Register successful',
                user: user,
                token: jwt
              }
              return res.status(status.OK).send(response)
            })
            .catch(error => res.status(status.BAD_REQUEST).send(error))
        }
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  list (req, res) {
    return User
      .findAll({})
      .then(users => res.status(status.OK).send(users))
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  retrieve (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return User
      .findOne({
        where: { id: req.params.id }
      })
      .then(user => {
        if (!user) {
          return res.status(status.NOT_FOUND).send({
            message: 'User Not Found'
          })
        }
        return res.status(status.OK).send(user)
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  update (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(status.NOT_FOUND).send({
            message: 'User Not Found'
          })
        }
        return user
          .update({
            username: req.body.username || user.username,
            fname: req.body.fname || user.fname,
            lname: req.body.lname || user.lname
          })
          .then(() => res.status(status.OK).send(user))
          .catch((error) => res.status(status.BAD_REQUEST).send(error))
      })
      .catch((error) => res.status(status.BAD_REQUEST).send(error))
  },

  destroy (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(status.BAD_REQUEST).send({
            message: 'User Not Found'
          })
        }
        return user
          .destroy()
          .then(() => res.status(status.DELETED).send({ message: 'User deleted successfully.' }))
          .catch(error => res.status(status.BAD_REQUEST).send(error))
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  }
}
