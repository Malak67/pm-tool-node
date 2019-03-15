'use strict'

require('dotenv').config()

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models').User

module.exports = function (passport) {
  var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = process.env.JWT_ENCRYPTION

  passport.use(new JwtStrategy(opts, function (jwtPayload, done) {
    return User.findByPk(jwtPayload.userDetails.UserId)
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch((err) => { return done(err, false) })
  }))
}
