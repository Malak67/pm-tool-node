'use strict'

const User = require('../models').User
const jwtDecode = require('jwt-decode')
const status = require('../enums/statusCodes').STATUS_CODES

const authorize = function (req, res, next) {
  const jwt = req.headers.authorization.replace(/Bearer /, '')
  const decoded = jwtDecode(jwt)
  let userId = decoded.userDetails.UserId

  return User.findOne({
    where: {
      id: userId,
      isAdmin: true
    }
  })
  .then(user => {
    if (!user) {
      return res.status(status.UNAUTHORIZED).send({ message: 'You are not authorized !' })
    } else {
      next()
    }
  })
  .catch(error => res.status(status.BAD_REQUEST).send(error))
}
module.exports.authorize = authorize