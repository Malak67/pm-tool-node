'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        fname: 'Florin',
        lname: 'Georgescu',
        password: '$2b$10$W.mJVYT7PkPeFwLHeIwJkeFRQL4ioohqufd4n1mE93Cd2uydYOMkK', // denopi@123
        email: 'admin@test.com',
        isAdmin: true,
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        username: 'user',
        fname: 'Normal',
        lname: 'User',
        password: '$2b$10$W.mJVYT7PkPeFwLHeIwJkeFRQL4ioohqufd4n1mE93Cd2uydYOMkK', // denopi@123
        email: 'user@test.com',
        isAdmin: false,
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
