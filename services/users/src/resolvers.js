const { users } = require('../../../mocks/users');

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    User(parent, { id }) {
      return users.find(user => user.id === id);
    },
    me(_, __, { userId }) {
      return users.find(u => u.id === userId);
    }
  },
  Organization: {
    users({ id: organizationId }) {
      return users.filter(u => u.organizationId === organizationId);
    }
  }
};

module.exports = {
  resolvers
};