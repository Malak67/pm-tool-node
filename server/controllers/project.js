'use strict'

const Project = require('../models').Project
const { validationResult } = require('express-validator/check')
const status = require('../enums/statusCodes').STATUS_CODES

module.exports = {
  create (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return Project
      .create({
        name: req.body.name,
        company: req.body.company
      })
      .then(project => res.status(status.CREATED).send(project))
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  list (req, res) {
    return Project
      .findAll({})
      .then(resModels => res.status(status.OK).send(resModels))
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  retrieve (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return Project
      .findOne({
        where: { id: req.params.id }
      })
      .then(project => {
        if (!project) {
          return res.status(status.NOT_FOUND).send({
            message: 'Project Not Found'
          })
        }
        return res.status(status.OK).send(project)
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  },

  update (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return Project
      .findByPk(req.params.id)
      .then(project => {
        if (!project) {
          return res.status(status.NOT_FOUND).send({
            message: 'Project Not Found'
          })
        }
        return project
          .update({
            name: req.body.name || project.name,
            company: req.body.company || project.company
          })
          .then(() => res.status(status.OK).send(project))
          .catch((error) => res.status(status.BAD_REQUEST).send(error))
      })
      .catch((error) => res.status(status.BAD_REQUEST).send(error))
  },

  destroy (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(status.UNPROCESSABLE).json({ errors: errors.mapped() })
    }

    return Project
      .findByPk(req.params.id)
      .then(project => {
        if (!project) {
          return res.status(status.BAD_REQUEST).send({
            message: 'Project Not Found'
          })
        }
        return project
          .destroy()
          .then(() => res.status(status.DELETED).send({ message: 'Project deleted successfully.' }))
          .catch(error => res.status(status.BAD_REQUEST).send(error))
      })
      .catch(error => res.status(status.BAD_REQUEST).send(error))
  }

}
