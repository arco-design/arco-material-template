const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const { webpack } = require('../../../arco.scripts.config');

module.exports = (config) => {
  if (webpack) {
    const commonConfig =
      typeof webpack === 'function'
        ? webpack
        : typeof webpack.component === 'function'
        ? webpack.component
        : () => {};
    config = commonConfig(config) || config;
  }

  const entry = {
    arco: path.resolve(__dirname, '../src/index.tsx'),
  };

  const demoVendorPath = path.resolve(__dirname, '../src/demo/arcoDemoVendor.js');
  if (fs.existsSync(demoVendorPath)) {
    entry.arcoDemoVendor = demoVendorPath;
  }

  return merge(config, { entry });
};
