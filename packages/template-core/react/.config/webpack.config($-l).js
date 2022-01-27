// 自定义 webpack 构建配置
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const { getGitRootPath } = require('arco-cli-dev-utils');

/**
 * @param config {import('arco-scripts').WebpackConfig}
 */
module.exports = (config) => {
  // Extend webpack common config from project root
  const rootConfigPath = path.resolve(getGitRootPath(), 'arco.scripts.config.js');
  if (fs.existsSync(rootConfigPath)) {
    const { webpack } = require(rootConfigPath);
    const configHandler =
      typeof webpack === 'function'
        ? webpack
        : typeof webpack.component === 'function'
          ? webpack.component
          : () => {};
    config = configHandler(config) || config;
  }

  const entry = {
    arco: path.resolve('./components/index.tsx'),
  };

  const output = {};
  const { umd } = require(path.resolve('package.json'));
  if (umd) {
    output.filename = (chunkData) =>
      chunkData.chunk.name === 'arco' ? path.basename(umd.file) : '[name].min.js';
    output.library = umd.module;
  }

  return merge(config, {
    entry,
    output,
  });
};
