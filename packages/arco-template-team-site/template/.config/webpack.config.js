const { tryGenerateAliasMapForWebpack } = require('@arco-design/arco-doc-site');

/**
 * @param config {import('@arco-design/arco-doc-site').WebpackConfig}
 */
module.exports = (config) => {
  /**
   * 🚀 Try to use resolve.alias to configure an alias for your material package to speed up dev.
   * It's some thing like: { '@arco-design/my-material': '/project-root/packages/my-material/src' }
   */
  config.resolve.alias = { ...tryGenerateAliasMapForWebpack() };
};
