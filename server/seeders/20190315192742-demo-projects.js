'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Smart Glasses',
        company: 'Google',
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        name: 'Social Media',
        company: 'Facebook',
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        name: 'Movie Database',
        company: 'IMDB',
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        name: 'HoloLens',
        company: 'Microsoft',
        createdAt: new Date(Date.now()).toLocaleString(),
        updatedAt: new Date(Date.now()).toLocaleString()
      },
      {
        name: 'Foldable Phone',
        company: 'Samsung',
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
