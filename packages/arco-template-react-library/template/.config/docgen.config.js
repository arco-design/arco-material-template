/**
 * @param config {import('@arco-design/arco-scripts').DocgenConfig}
 */
module.exports = (config) => {
  config.entry = 'components/*';
  config.outputFileName = 'README.md';
  config.tsParseTool = ['ts-document'];
};
