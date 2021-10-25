const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName, isForMonorepo }) => {
  if (isForMonorepo) {
    logInfo([
      '******************************************************************',
      '  阅读 README.md 获取快速指引。执行如下命令，添加你的第一个工具函数',
      `    $ cd packages/${projectName}`,
      '    $ yarn add:util yourUtilName',
      '******************************************************************',
    ]);
  } else {
    logInfo([
      '******************************************************************',
      '  阅读 README.md 获取快速指引。执行如下命令，添加你的第一个工具函数',
      `    $ cd ${projectName}`,
      '    $ npm run add:util -- yourUtilName',
      '    $ npm run dev',
      '******************************************************************',
    ]);
  }
};
