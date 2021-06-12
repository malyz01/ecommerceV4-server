const { v4: uuid } = require('uuid');
const { sequelize, Sequelize } = require('../index');
const User = require('./User');

const Order = sequelize.define(
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
        model: User,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    orderNo: { type: Sequelize.INTEGER, autoIncrement: true }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Order;
