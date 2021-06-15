'use strict';
const data = require('../genData/productImages.json');
const parsed = data.map((d) => ({
  ...d,
  createdAt: new Date(),
  updatedAt: new Date()
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductImage', parsed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductImage', null, {});
  }
};
