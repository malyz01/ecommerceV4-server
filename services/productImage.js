const ProductImage = require('../db/models/ProductImage');

// GraphQL params
// (parent, args, context, info) => {}

exports.fetchAll = () => ProductImage.findAll();

exports.fetch = (_, arg) =>
  ProductImage.findOne({
    where: {
      productId: arg.id
    }
  });

exports.fetchWithParentId = ({ dataValues }) =>
  ProductImage.findAll({ where: { productId: dataValues.id } });
