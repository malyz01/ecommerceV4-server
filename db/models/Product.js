const { v4: uuid } = require('uuid');

const { sequelize, Sequelize } = require('../index');
const Cart = require('./Cart');

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: () => uuid(),
      primaryKey: true
    },
    cartId: {
      type: Sequelize.UUID,
      references: {
        model: Cart,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
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
    stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Product;
