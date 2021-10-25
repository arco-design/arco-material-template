# Arco Vue 物料模板

## 快速开始

```
// 开发模式
npm run dev

// 构建
npm run build

// 生成元数据 arcoMeta
arco generate

// 发布包
arco publish
```

## API 文档

**为了帮助他人更好地使用你的组件，请提供详细的 API 文档。**

### 书写注释

我们使用了 [Vue Styleguidist](https://vue-styleguidist.github.io/) 来提取组件 Props 的注释，然后自动生成组件的 API 文档。为此，如果你想对外暴露一个 Property，请参照Vue Styleguidist 的规则书写注释：

```vue
// ✅ 可以被正确提取的注释
props: {
  /**
   * 提示文字
   */
  tip: String,
  /**
   * 按钮组件Props
   */
  buttonProps: {
    // 如果使用PropType，请使用对象的形式定义
    type: Object as PropType<Record<string, any>>,
  },
},

// ❌ 没有书写注释的属性会被忽略
props: {
  disabled: Boolean,
},
```

### 扩展 TEMPLATE.md

`TEMPLATE.md` 是用于自动文档生成的模板，你可以修改此文件添加更多组件的使用帮助信息，但请不要删除其原有的内容，否则可能导致内容替换失败。

```markdown
// TEMPLATE.md
# TooltipButton

用于生成组件参数文件入口
%%API(index.vue)%%

### OtherProps

在这里你可以书写更多组件帮助文档。

## Demos

每个Demo文件的入口
%%MATERIAL(demo/index.ts)%%
```

## 测试（暂无）

测试目录位于 `src/__test__`。你可以在 `index.test.tsx` 中编写你的测试用例，在 `demo.test.tsx` 中可以进行基于 Demo 的快照测试。

`npm run test` 命令允许你传入任何 `jest` 的命令行参数，例如 `npm run test -- --u` `npm run test -- --no-cache`。

## DEMO

Demo 目录位于 `src/demo`。 如果你添加了一个 Demo，那么你需要在 `src/demo/index.js` 添加对应代码，才能在 Storybook 中预览到它。请使用 JsDoc 的形式描述 Demo，这些帮助信息将被展示在物料平台上。

[查看完整帮助文档](https://arco.design/cli)
