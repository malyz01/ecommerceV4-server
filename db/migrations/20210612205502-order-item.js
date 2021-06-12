'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderItem', {
      id: {
        type: Sequelize.UUID,
        defaultValue: function () {
          return uuid();
        },
        primaryKey: true
      },
      orderId: {
        type: Sequelize.UUID,
        references: {
          model: 'Order',
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
    await queryInterface.dropTable('OrderItem');
  }
};
