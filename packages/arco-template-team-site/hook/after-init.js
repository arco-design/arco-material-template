const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName }) => {
  logInfo([
    '******************************************************************',
    '  站点项目初始化成功，阅读 README.md 获取快速指引。',
    '******************************************************************',
  ]);
};
