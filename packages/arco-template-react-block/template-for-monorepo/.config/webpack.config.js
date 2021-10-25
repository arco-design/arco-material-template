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
  return merge(config, {
    entry: path.resolve(__dirname, '../src/index.tsx'),
  });
};
