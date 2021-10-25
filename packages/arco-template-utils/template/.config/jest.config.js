// 自定义 Jest 配置
exports.client = (config) => {
  config.coveragePathIgnorePatterns.push('/src/index.ts');
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};
