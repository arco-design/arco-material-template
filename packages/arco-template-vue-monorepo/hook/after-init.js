const { spawn } = require('child_process');

const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName }) => {
  return new Promise((resolve, reject) => {
    spawn('mkdir', ['-p', 'packages'], { stdio: 'inherit' }).on('close', (code) => {
      if (code) {
        reject();
      } else {
        resolve();
      }
    });
  }).finally(() => {
    logInfo([
      '******************************************************************',
      '  阅读 README.md 获取快速指引。执行如下命令，添加你的第一个物料',
      `    $ cd ${projectName}`,
      `    $ yarn add:package -- yourPackageName`,
      '******************************************************************',
    ]);
  });
};
