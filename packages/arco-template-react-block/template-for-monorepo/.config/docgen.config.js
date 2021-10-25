const { docgen } = require('../../../arco.scripts.config');
module.exports = (config) => {
  if (docgen) {
    config = docgen(config) || config;
  }

  config.template = 'README.md';
};
