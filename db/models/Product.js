const { v4: uuid } = require('uuid');

const { sequelize, Sequelize } = require('../index');

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: () => uuid(),
      primaryKey: true
    },
    productCode: { type: Sequelize.STRING, allowNull: false, unique: true },
    name: { type: Sequelize.STRING, allowNull: false },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue('price');
        return Number(rawValue);
      }
    },
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
    stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    description: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Product;
