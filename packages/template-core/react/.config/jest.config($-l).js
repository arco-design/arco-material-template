const fs = require('fs');
const path = require('path');
const { getGitRootPath } = require('arco-cli-dev-utils');

module.exports = {
  /**
   * @param config {import('arco-scripts').JestConfig}
   */
  node: (config) => {
    const rootConfigPath = path.resolve(getGitRootPath(), 'arco.scripts.config.js');
    if (fs.existsSync(rootConfigPath)) {
      const { jest } = require(rootConfigPath);
      if (jest && jest.node) {
        config = jest.node(config) || config;
      }
    }

    config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
    config.moduleNameMapper = {
      '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
      '^@CONST_PACKAGE_NAME@$': '<rootDir>',
    };
  },
  /**
   * @param config {import('arco-scripts').JestConfig}
   */
  client: (config) => {
    const rootConfigPath = path.resolve(getGitRootPath(), 'arco.scripts.config.js');
    if (fs.existsSync(rootConfigPath)) {
      const { jest } = require(rootConfigPath);
      if (jest && jest.client) {
        config = jest.client(config) || config;
      }
    }

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
