module.exports = function(config) {
  for (const item of config.build.rollupOptions.output) {
    if (item.format === 'umd') {
      // 修改UMD格式下暴露到全局的变量名
      item.name = 'TooltipButton';
    }
  }

  return config;
};
