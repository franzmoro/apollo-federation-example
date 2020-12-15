const { ROLES } = require('./constants');

const organizationGlobal = {
  id: 1,
  name: "Global Org",
  description: 'Global organization with just 2 users.',
  // users array added later
};

const adminUser = {
  id: '1',
  role: ROLES.SUPER_ADMIN,
  firstName: 'Hadmin',
  lastName: 'Super',
  email: 'super-admin@globalorg.com',
  organization: organizationGlobal
};

const normalUser = {
  id: '2',
  role: ROLES.NORMAL_USER,
  firstName: 'Reggie',
  lastName: 'User',
  email: 'regular@globalorg.com',
  organization: organizationGlobal
};
const users = [adminUser, normalUser];

organizationGlobal.users = users
const organizations = [organizationGlobal];

module.exports = {
  organizations,
  users,
}