const { v4: uuid } = require('uuid');
const { sequelize, Sequelize } = require('../index');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define(
  'OrderItem',
  {
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
        model: Order,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    productId: {
      type: Sequelize.UUID,
      references: {
        model: Product,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    quantity: { type: Sequelize.INTEGER, allowNull: false }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = OrderItem;
