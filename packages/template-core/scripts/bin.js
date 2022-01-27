#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const copyProjectFiles = require('./copyProjectFiles');

/**
 * @property type
 * @property packageName
 * @property targetDir
 * @property monorepo
 * @property framework
 */
const options = {};

process.argv.slice(2).forEach((arg, index) => {
  if (index === 0) {
    options.packageName = arg;
  } else {
    const [optionName, optionValue] = arg.replace(/^--/, '').split('=');
    options[optionName] = optionValue || true;
  }
});

const targetDir = options.targetDir ? path.resolve(options.targetDir) : '';
targetDir && fs.removeSync(targetDir);

copyProjectFiles({
  targetDir,
  type: options.type,
  framework: options.framework,
  packageName: options.packageName,
  isForMonorepo: !!options.monorepo,
})
  .then(() => console.log('Project has been created!'))
  .catch((err) => console.log('Project create failed', err));
