// 自定义 webpack 构建配置
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');

module.exports = (config) => {
  const entry = {
    arco: path.resolve(__dirname, '../src/index.tsx'),
  };

  // 打包 Demo 所依赖的库
  const demoVendorPath = path.resolve(__dirname, '../src/demo/arcoDemoVendor.js');
  if (fs.existsSync(demoVendorPath)) {
    entry.arcoDemoVendor = demoVendorPath;
  }

  return merge(config, { entry });
};
