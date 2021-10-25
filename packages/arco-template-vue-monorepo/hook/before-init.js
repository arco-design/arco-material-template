module.exports = function () {
  console.log('\n当前模板需要使用最新版本的 Arco CLI，请使用如下命令升级后重新操作：');
  console.log('  $ npm install @arco-design/arco-cli@latest -g');
  process.exit(1);
};
