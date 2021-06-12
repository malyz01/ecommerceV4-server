'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      cartId: {
        type: Sequelize.UUID,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      views: Sequelize.INTEGER,
      orientation: {
        type: Sequelize.ENUM,
        values: ['masculine', 'feminine', 'unisex']
      },
      type: {
        type: Sequelize.ENUM,
        values: ['t-shirts', 'pants', 'jackets', 'shorts']
      },
      size: {
        type: Sequelize.ENUM,
        values: ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};
