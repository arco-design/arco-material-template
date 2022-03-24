const path = require('path');
const fs = require('fs');
/**
 * @param config {import('arco-scripts').DocgenConfig}
 */
module.exports = (config) => {
  const rootConfigPath = path.resolve(getGitRootPath(), 'arco.scripts.config.js');
  if (fs.existsSync(rootConfigPath)) {
    const { docgen } = require(rootConfigPath);
    config = docgen(config) || config;
  }
  config.entry = 'src/*';
  config.outputFileName = 'README.md';
};
