'use strict'
const bcrypt = require('bcrypt')
const bcryptP = require('bcrypt-promise')
const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config/config`)[env]

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, { paranoid: true })

  User.associate = (models) => {
    // associations can be defined here
  }

  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      return bcrypt.genSalt(10)
        .then(salt => {
          if (salt) {
            return bcrypt.hash(user.password, salt)
              .then(hash => {
                user.password = hash
              })
              .catch(error => {
                throw new Error(error)
              })
          }
        })
        .catch(error => {
          throw new Error(error)
        })
    }
  })

  User.prototype.comparePassword = async function (pw) {
    if (!this.password) throw new Error('password not set')
    return bcryptP.compare(pw, this.password)
      .then(() => {
        return this
      })
      .catch(error => {
        throw new Error(`${error} Invalid password`)
      })
  }

  User.prototype.getJWT = function () {
    let expirationTime = parseInt(config.jwt_expiration)
    let userDetails = {}
    userDetails.UserId = this.id

    return User.findByPk(this.id)
      .then(user => {
        userDetails.username = user.username
        userDetails.email = user.email
        userDetails.isAdmin = user.isAdmin
        const token = jwt.sign({ userDetails: userDetails
        }, config.jwt_encryption, { expiresIn: expirationTime })
        return token
      })
      .catch(error => {
        throw new Error(error.message)
      })
  }

  User.prototype.toWeb = function (pw) {
    let json = this.toJSON()
    return json
  }

  return User
}
