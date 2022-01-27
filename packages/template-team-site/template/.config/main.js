/**
 * @type {import('arco-material-doc-site').MainConfig}
 */
module.exports = {
  build: {
    // 匹配文档和组件的路径
    globs: {
      // 可用于 Arco Monorepo 模板的配置
      component: {
        base: '../*',
        doc: 'docs/README.md',
        demo: 'src/demo/index.js',
        style: 'src/style/index.less',
      },
      // 可用于 Arco 物料库模板的配置
      // component: {
      //   base: '../components/*',
      //   doc: 'README.md',
      //   demo: 'demo/index.js',
      //   style: 'style/index.less',
      // },
      // 可用于 Arco 工具库模板的配置
      // component: {
      //   base: '../src/*',
      //   doc: 'README.md',
      //   demo: 'demo/index.js',
      // },
      doc: './docs/**/*.md',
    },
    // 是否引入物料的样式文件
    withMaterialStyle: true,
  },
  // 站点配置
  site: {
    // 站点支持的语言种类
    languages: ['zh-CN'],
    // 飞书 onCall 群的 ID
    larkGroupID: '',
    // 是否允许切换站点主题
    allowThemeToggle: false,
    // 物料 Demo 配置
    demo: {
      // 是否允许实时编辑调试
      editable: true,
    }
  },
};
