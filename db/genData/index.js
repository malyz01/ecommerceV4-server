const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const faker = require('faker');
const { random: r } = require('lodash');
const bcrypt = require('bcrypt');

function createJson(name, data) {
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile(
    `${path.resolve('db', 'genData', `${name}.json`)}`,
    stringify,
    'utf8',
    function (err) {
      console.log(`${name} JSON has been saved.`);
    }
  );
}

// USER AND PROFILE
async function genUsers(qty) {
  const hashPassword = await bcrypt.hash('123456', 10);
  const roles = ['admin', 'basic'];

  const users = [];
  const profiles = [];

  for (let i = 0; i < qty; i++) {
    const userId = uuid();

    users.push({
      id: userId,
      email: faker.internet.email(),
      password: hashPassword,
      role: roles[r(0, 1)]
    });

    profiles.push({
      id: uuid(),
      userId,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
  }

  createJson('users', users);
  createJson('profiles', profiles);
}

// PRODUCT
async function genProducts(qty) {
  const orientation = ['masculine', 'feminine', 'unisex'];
  const type = ['t-shirts', 'pants', 'jackets', 'shorts'];
  const size = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
  const imgType = ['jpeg', 'png'];

  const products = [];
  const productImages = [];

  for (let i = 0; i < qty; i++) {
    const s = r(0, 7);
    const productName = faker.commerce.productName();
    const productInitial = productName.substring(0, 2).toUpperCase();

    for (let q = 0; q < 3; q++) {
      const productId = uuid();
      const description = faker.commerce.productDescription();

      products.push({
        id: productId,
        productCode: productInitial + faker.datatype.hexaDecimal(6),
        name: productName,
        price: faker.commerce.price(5, 90, 2),
        views: r(0, 100),
        orientation: orientation[r(0, 2)],
        type: type[r(0, 3)],
        size: size[s + q],
        stock: r(5, 50),
        description
      });

      for (let j = 0; j < 2; j++) {
        productImages.push({
          id: uuid(),
          productId,
          name: `${productName} image ${j + 1}`,
          url: `https://picsum.photos/1920/1080?random=${r(0, 1000)}`,
          type: imgType[r(0, 1)],
          description
        });
      }
    }
  }

  createJson('products', products);
  createJson('productImages', productImages);
}

async function genData() {
  await genUsers(10);
  await genProducts(50);
}

genData();
