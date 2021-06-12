const { v4: uuid } = require('uuid');
const db = require('../index');
const User = require('./User');

const Cart = db.sequelize.define(
  'Cart',
  {
    id: {
      type: db.Sequelize.UUID,
      defaultValue: function () {
        return uuid();
      },
      primaryKey: true
    },
    userId: {
      type: db.Sequelize.UUID,
      references: {
        model: User,
        key: 'id',
        deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Cart;
