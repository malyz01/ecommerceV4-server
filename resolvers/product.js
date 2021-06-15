const db = require('../services');

module.exports = {
  Query: {
    products: db.Product.fetchAll,
    product: db.Product.fetch
  },
  Product: {
    productImage: db.ProductImage.fetchWithParentId
  }
};
