'use strict';
const data = require('../genData/products.json');
const parsed = data.map((d) => ({
  ...d,
  createdAt: new Date(),
  updatedAt: new Date()
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', parsed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
