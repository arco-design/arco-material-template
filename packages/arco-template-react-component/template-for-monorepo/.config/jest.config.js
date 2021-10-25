const { jest } = require('../../../arco.scripts.config');
module.exports = {
  node: (config) => {
    config = jest.node(config) || config;
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
  client: (config) => {
    config = jest.client(config) || config;
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
};
