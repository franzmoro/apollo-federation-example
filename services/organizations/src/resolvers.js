const { organizations } = require('../../../mocks/organizations');

const resolvers = {
  Query: {
    organizations() {
      return organizations;
    },
    myOrganization(_parent, _args, { userId }) {
      return organizations.find(({ users }) => users.includes(userId));
    },
  },
  User: {
    organization({ id: userId }) {
      return organizations.find(({ users }) => users.includes(userId));
    }
  }
};

module.exports = {
  resolvers
};