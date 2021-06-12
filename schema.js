const users = {
  id: 'string',
  name: 'string',
  password: 'string',
  email: 'string',
  role: 'admin, basic'
};

const carts = {
  id: 'string',
  userId: 'string',
  type: 'string'
};

const products = {
  id: 'string',
  cartId: 'string',
  name: 'string',
  price: {
    value: 'decimal',
    currency: 'string'
  },
  views: 'integer',
  orientation: 'masculing, feminine, unisex',
  type: '[T-SHIRTS, PANTS, JACKETS, SHORTS]',
  size: '[XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL]'
};
