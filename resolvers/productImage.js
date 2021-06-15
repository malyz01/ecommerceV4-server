const db = require('../services');

module.exports = {
  Query: {
    productImages: db.ProductImage.fetchAll,
    productImage: db.ProductImage.fetch
  }
};
