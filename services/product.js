const Product = require('../db/models/Product');

// GraphQL params
// (parent, args, context, info) => {}

exports.fetchAll = () => Product.findAll();

exports.fetch = (_, arg) =>
  Product.findOne({
    where: {
      id: arg.id
    }
  });
