'use strict'

module.exports = {
  create: {
    name: {
      in: ['body'],
      isLength: {
        errorMessage: 'Name is required',
        options: { min: 2 }
      }
    },
    company: {
      in: ['body'],
      isLength: {
        errorMessage: 'Company is required',
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
    name: {
      in: ['body'],
      isLength: {
        errorMessage: 'Name is required',
        options: { min: 2 }
      }
    },
    company: {
      in: ['body'],
      isLength: {
        errorMessage: 'Company is required',
        options: { min: 4 }
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
