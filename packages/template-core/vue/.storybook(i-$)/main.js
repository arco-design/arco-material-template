const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const isMonorepo = fs.existsSync(path.resolve('lerna.json'));
const packagePaths = glob.sync(path.resolve(isMonorepo ? 'packages/*' : './'));

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

function getLoaderForStyle(cssOptions) {
  return [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ];
}

module.exports = {
  core: { builder: 'webpack5' },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    // 为 storybook 添加 packages 中项目的 alias
    packagePaths.forEach((_path) => {
      const pathSrc = path.resolve(_path, 'src');
      const pathComponents = path.resolve(_path, 'components');
      const packageJson = fs.readJsonSync(path.resolve(_path, 'package.json'));
      config.resolve.alias[`${packageJson.name}$`] = fs.existsSync(pathComponents)
        ? pathComponents
        : pathSrc;
    });

    // less
    config.module.rules.push({
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getLoaderForStyle(),
    });

    // less css modules
    config.module.rules.push({
      test: lessModuleRegex,
      use: getLoaderForStyle({ modules: true }),
    });

    // svg modules
    config.module.rules.push({
      test: /\.svg$/,
      use: ['vue-loader', 'vue-svg-loader'],
    });

    return config;
  },
};
