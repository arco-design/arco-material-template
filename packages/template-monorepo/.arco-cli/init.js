const copyProjectFiles = require('../scripts/copyProjectFiles');

module.exports = function ({ projectPath, type }) {
  const [_, framework] = type.match(/([^-]+)-.+/);
  return copyProjectFiles({
    framework,
    targetDir: projectPath,
  }).catch((err) => {
    console.error('Copy Template files failed!');
    process.exit(0);
  });
};
