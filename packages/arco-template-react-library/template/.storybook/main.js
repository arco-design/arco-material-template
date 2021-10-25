const path = require('path');

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

function getLoaderForStyle(isCssModule) {
  return [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: isCssModule ? { modules: true } : {},
    },
    {
      loader: 'less-loader',
      options: {
        javascriptEnabled: true,
      },
    },
  ];
}

module.exports = {
  stories: ['../stories/*.@(js|jsx|ts|tsx)'],
  webpackFinal: (config) => {
    config.resolve.alias['@CONST_PACKAGE_NAME@'] = path.resolve(__dirname, '../components');

    // 支持 import less
    config.module.rules.push({
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getLoaderForStyle(),
    });

    // less css modules
    config.module.rules.push({
      test: lessModuleRegex,
      use: getLoaderForStyle(true),
    });

    // 支持 import svg
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: ['@svgr/webpack'],
    });

    return config;
  },
};
