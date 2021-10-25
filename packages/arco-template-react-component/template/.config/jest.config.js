// 自定义 Jest 配置
exports.node = (config) => {
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};

exports.client = (config) => {
  config.moduleNameMapper = {
    '^@CONST_PACKAGE_NAME@/(.+)$': '<rootDir>/$1',
    '^@CONST_PACKAGE_NAME@$': '<rootDir>',
  };
};
