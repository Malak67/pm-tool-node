'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        fname: 'Florin',
        lname: 'Georgescu',
        password: '$2b$10$rmsKAmTZDlPTMpzZu/e5s.XVJhthrbKVFVu2vFVyPOuFlvGWWlA1y', // admin@123
        email: 'admin@test.com',
        isAdmin: true,
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        username: 'user',
        fname: 'Son',
        lname: 'Goku',
        password: '$2b$10$rmsKAmTZDlPTMpzZu/e5s.XVJhthrbKVFVu2vFVyPOuFlvGWWlA1y', // admin@123
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
