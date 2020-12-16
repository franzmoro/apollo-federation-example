const { users } = require('./users');

const organizationGlobal = {
  id: 1,
  name: "Global Org",
  description: 'Global organization with just 2 users.',
  users: users.map(u => u.id),
};

module.exports = {
  organizations: [organizationGlobal],
}