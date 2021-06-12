'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      productCode: { type: Sequelize.STRING, allowNull: false, unique: true },
      name: { type: Sequelize.STRING, allowNull: false },
      price: { type: Sequelize.DECIMAL, allowNull: false },
      views: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      orientation: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['masculine', 'feminine', 'unisex']
      },
      type: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['t-shirts', 'pants', 'jackets', 'shorts']
      },
      size: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      description: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};
