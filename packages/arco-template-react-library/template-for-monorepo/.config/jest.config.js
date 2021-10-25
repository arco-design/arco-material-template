const { jest } = require('../../../arco.scripts.config');

module.exports = {
  node: (config) => {
    config = jest.node(config) || config;
    config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
  client: (config) => {
    config = jest.client(config) || config;
    config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
    config.collectCoverageFrom = ['components/**/*.{ts,tsx}', '!components/**/style/*'];
    config.coveragePathIgnorePatterns = [
      '/node_modules/',
      '/lib/',
      '/es/',
      '/dist/',
      '/components/index.tsx',
      '/components/locale/',
    ];
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
};
