const { v4: uuid } = require('uuid');

const { sequelize, Sequelize } = require('../index');
const Product = require('./Product');

const ProductImage = sequelize.define(
  'ProductImage',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: () => uuid(),
      primaryKey: true
    },
    productId: {
      type: Sequelize.UUID,
      references: {
        model: Product,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    name: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    description: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = ProductImage;
