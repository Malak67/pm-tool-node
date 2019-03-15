'use strict'

const User = require('../models').User

module.exports = {
  login: {
    username: {
      in: ['body'],
      isLength: {
        errorMessage: 'Username missing',
        options: { min: 1 }
      }
    },
    password: {
      in: ['body'],
      isLength: {
        errorMessage: 'Password should be at least 4 chars long',
        options: { min: 4 }
      }
    }
  },
  register: {
    username: {
      in: ['body'],
      isLength: {
        errorMessage: 'Username missing',
        options: { min: 1 }
      }
    },
    fname: {
      in: ['body'],
      isLength: {
        errorMessage: 'First Name should be at least 3 characters long',
        options: { min: 2 }
      }
    },
    lname: {
      in: ['body'],
      isLength: {
        errorMessage: 'Last Name should be at least 3 characters long',
        options: { min: 2 }
      }
    },
    email: {
      in: ['body'],
      isLength: {
        errorMessage: 'Email should be at least 4 characters long',
        options: { min: 4 }
      },
      isEmail: {
        errorMessage: 'Email is invalid'
      },
      custom: {
        options: async (value, { req, location, path }) => {
          let user = await User.findOne({ where: { email: value } })
          if (user != null) {
            throw new Error('Email already in database')
          }
          return value
        }
      }
    },
    password: {
      isLength: {
        errorMessage: 'Password should be at least 4 chars long',
        options: { min: 4 }
      }
    }
  },
  update: {
    id: {
      in: ['params'],
      errorMessage: 'ID is wrong',
      isInt: true,
      toInt: true
    },
    username: {
      in: ['body'],
      isLength: {
        errorMessage: 'Username missing',
        options: { min: 1 }
      }
    },
    fname: {
      in: ['body'],
      isLength: {
        errorMessage: 'First Name should be at least 3 characters long',
        options: { min: 3 }
      }
    },
    lname: {
      in: ['body'],
      isLength: {
        errorMessage: 'Last Name should be at least 3 characters long',
        options: { min: 3 }
      }
    }
  },
  retrieve: {
    id: {
      in: ['params'],
      errorMessage: 'ID is wrong',
      isInt: true,
      toInt: true
    }
  },
  destroy: {
    id: {
      in: ['params'],
      errorMessage: 'ID is wrong',
      isInt: true,
      toInt: true
    }
  }
}
