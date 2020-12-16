const { products } = require('../../../mocks/products');

const resolvers = {
  Query: {
    product(parent, { id }) {
      return products.find(p => p.id === id);
    },
    products(parent, args, context) {
      return products;
    },
  },
  Product: {
    __resolveReference(object) {
      return products.find(product => product.id === object.id);
    }
  }
};

module.exports = {
  resolvers
};