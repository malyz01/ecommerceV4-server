const { v4: uuid } = require('uuid');

const db = require('../index');
const Cart = require('./Cart');

const Product = db.sequelize.define(
  'Product',
  {
    id: {
      type: db.Sequelize.UUID,
      defaultValue: () => uuid(),
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
    name: db.Sequelize.STRING,
    price: db.Sequelize.DECIMAL,
    views: db.Sequelize.INTEGER,
    orientation: {
      type: db.Sequelize.ENUM,
      values: ['masculine', 'feminine', 'unisex']
    },
    type: {
      type: db.Sequelize.ENUM,
      values: ['t-shirts', 'pants', 'jackets', 'shorts']
    },
    size: {
      type: db.Sequelize.ENUM,
      values: ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Product;
