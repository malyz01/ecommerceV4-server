'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CartItem', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      cartId: {
        type: Sequelize.UUID,
        references: {
          model: 'Cart',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: 'Product',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CartItem');
  }
};
