const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName, isForMonorepo }) => {
  if (isForMonorepo) {
    logInfo([
      '******************************************************************',
      '  阅读 README.md 获取快速指引。执行如下命令，添加你的第一个组件',
      `    $ cd packages/${projectName}`,
      '    $ yarn add:component YourComponentName',
      '******************************************************************',
    ]);
  } else {
    logInfo([
      '******************************************************************',
      '  阅读 README.md 获取快速指引。执行如下命令，添加你的第一个组件',
      `    $ cd ${projectName}`,
      '    $ npm run add:component -- YourComponentName',
      '    $ npm run dev',
      '******************************************************************',
    ]);
  }
};
