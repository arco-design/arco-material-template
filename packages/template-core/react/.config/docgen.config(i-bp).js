/**
 * @param config {import('arco-scripts').DocgenConfig}
 */
module.exports = (config) => {
  config.entry = 'src';
  config.template = 'README.md';
  // DON'T change output!!!
  config.output = 'docs/README.md';
  config.demoGlob = 'demo/index.js';
};
