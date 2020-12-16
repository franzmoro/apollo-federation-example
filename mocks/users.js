const adminUser = {
  id: '1',
  role: 'SUPER_ADMIN',
  firstName: 'Hadmin',
  lastName: 'Super',
  email: 'super-admin@globalorg.com',
  organizationId: '1'
};

const normalUser = {
  id: '2',
  role: 'NORMAL_USER',
  firstName: 'Reggie',
  lastName: 'User',
  email: 'regular@globalorg.com',
  organizationId: '1'
};

module.exports = {
  users: [adminUser, normalUser],
}