// 自定义 webpack 构建配置
const path = require('path');

module.exports = (config) => {
  config.entry = path.resolve(__dirname, '../components/index.tsx');
};
