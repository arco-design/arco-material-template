/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.node = (config) => {
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};

/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.client = (config) => {
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};
