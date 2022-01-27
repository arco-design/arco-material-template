/**
 * @param config {import('arco-scripts').DocgenConfig}
 */
module.exports = (config) => {
  config.entry = 'components/*';
  config.outputFileName = 'README.md';
  config.tsParseTool = ['ts-document'];
};
