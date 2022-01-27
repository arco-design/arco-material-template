#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const copyProjectFiles = require('./copyProjectFiles');

/**
 * @property targetDir
 * @property framework
 */
const options = {};

process.argv.slice(1).forEach((arg, index) => {
  const [optionName, optionValue] = arg.replace(/^--/, '').split('=');
  options[optionName] = optionValue || true;
});

const targetDir = options.targetDir ? path.resolve(options.targetDir) : '';
targetDir && fs.removeSync(targetDir);

copyProjectFiles({
  targetDir,
  framework: options.framework,
})
  .then(() => console.log('Project has been created!'))
  .catch((err) => console.log('Project create failed', err));
