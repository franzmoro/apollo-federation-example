const { organizations, users } = require('./mocks');

const resolvers = {
  Query: {
    user(root, { id }) {
      return users.find(user => user.id === id);
    },
    allUsers() {
      return users;
    },
    myOrganization() {
      const user = users[0];
      return user.organization;
    },
    me() {
      return users[0];
    }
  },
  User: {
    __resolveReference(object) {
      return users.find(user => user.id === object.id);
    }
  },
  Organization: {
    __resolveReference(object) {
      return users.find(user => user.id === object.id);
    },
  }
};

module.exports = {
  resolvers
};