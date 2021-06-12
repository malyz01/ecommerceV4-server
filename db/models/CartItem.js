const { v4: uuid } = require('uuid');
const db = require('../index');
const Cart = require('./Cart');
const Product = require('./Product');

const CartItem = db.sequelize.define(
  'CartItem',
  {
    id: {
      type: db.Sequelize.UUID,
      defaultValue: function () {
        return uuid();
      },
      primaryKey: true
    },
    cartId: {
      type: db.Sequelize.UUID,
      references: {
        model: Cart,
        key: 'id',
        deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    productId: {
      type: db.Sequelize.UUID,
      references: {
        model: Product,
        key: 'id',
        deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    quantity: { type: Sequelize.INTEGER, allowNull: false }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = CartItem;
