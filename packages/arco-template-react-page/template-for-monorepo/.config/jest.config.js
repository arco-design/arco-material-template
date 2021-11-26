const { jest } = require('../../../arco.scripts.config');
module.exports = {
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  node: (config) => {
    config = jest.node(config) || config;
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  client: (config) => {
    config = jest.client(config) || config;
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
};
