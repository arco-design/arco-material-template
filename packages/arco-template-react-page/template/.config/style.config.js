const path = require('path');

/**
 * @param config {import('@arco-design/arco-scripts').StyleConfig}
 */
module.exports = (config) => {
  const { umd } = require(path.resolve('package.json'));
  if (umd && umd.style) {
    const dirName = path.dirname(umd.style);
    const fileName = path.basename(umd.style);
    Object.assign(config.css.output.dist, {
      path: dirName,
      cssFileName: fileName,
      rawFileName: fileName.replace(/\.css$/, '.less'),
    });
  }
};
