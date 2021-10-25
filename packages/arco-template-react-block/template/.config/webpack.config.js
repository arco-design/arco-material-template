// 自定义 webpack 构建配置
const path = require('path');
const merge = require('webpack-merge');

module.exports = (config) => {
  return merge(config, {
    entry: path.resolve(__dirname, '../src/index.tsx'),
  });
};
