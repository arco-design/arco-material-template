const { docgen } = require('../../../arco.scripts.config');

/**
 * @param config {import('@arco-design/arco-scripts').DocgenConfig}
 */
module.exports = (config) => {
  if (docgen) {
    config = docgen(config) || config;
  }

  config.template = 'README.md';
};
