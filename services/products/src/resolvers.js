const { products } = require('./mocks');

const resolvers = {
  Query: {
    product(_root, { id }) {
      return products.find(p => p.id === id);
    },
    products(_root, _context) {
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