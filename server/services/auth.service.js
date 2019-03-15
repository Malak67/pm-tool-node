'use strict'

const { User } = require('../models')

const createUser = (userInfo, admin) => {
  let authInfo

  authInfo = {}
  authInfo.status = 'create'

  return User.create({
    username: userInfo.username,
    fname: userInfo.fname,
    lname: userInfo.lname,
    email: userInfo.email,
    password: userInfo.password,
    isAdmin: admin
  })
    .then(user => { return user })
    .catch(error => {
      if (error) {
        throw new Error(error.message)
      } else {
        throw new Error('User already exists !')
      }
    })
}
module.exports.createUser = createUser

const authUser = (userInfo) => {
  let username
  let authInfo = {}
  authInfo.status = 'login'
  username = userInfo.username

  if (!username) throw new Error('Please enter an username to login')

  if (!userInfo.password) throw new Error('Please enter a password to login')

  if (username) {
    authInfo.method = 'username'

    return User.findOne({ where: { username: username } })
      .then(user => {
        console.log(user)
        if (!user) throw new Error('Not registered')
        return user.comparePassword(userInfo.password)
          .then(success => {
            return user
          })
          .catch(error => {
            console.log(error)
            throw new Error(error.message)
          })
      })
      .catch(error => {
        console.log(error)
        throw new Error(error.message)
      })
  }
}
module.exports.authUser = authUser
