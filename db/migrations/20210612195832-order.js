'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Order',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: function () {
            return uuid();
          },
          primaryKey: true
        },
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'User',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
        },
        orderNo: { type: Sequelize.INTEGER, autoIncrement: true },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      },
      {
        initialAutoIncrement: 1000
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Order');
  }
};
