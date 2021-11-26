/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.node = (config) => {
  config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};

/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.client = (config) => {
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
};
