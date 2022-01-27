const copyProjectFiles = require('../scripts/copyProjectFiles');

module.exports = function ({ projectPath, type: materialType, isForMonorepo, packageName }) {
  const [_, framework, type] = materialType.match(/([^-]+)-(.+)/);
  return copyProjectFiles({
    type,
    framework,
    packageName,
    isForMonorepo,
    targetDir: projectPath,
  }).catch((err) => {
    console.error('Copy Template files failed!');
    process.exit(0);
  });
};
