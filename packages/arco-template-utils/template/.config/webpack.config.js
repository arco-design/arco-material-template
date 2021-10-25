// 自定义 webpack 构建配置
const path = require('path');
const merge = require('webpack-merge');

module.exports = (config) => {
  const entry = {
    arco: path.resolve(__dirname, '../src/index.ts'),
  };

  return merge(config, { entry });
};
