# Arco 物料项目

[物料平台文档中心](https://arco.design/docs/material/guide)

## 快速开始

```
# 开发
npm run dev

# 构建
npm run build

# 发布前预览
npm run prepublishOnly && arco preview

# 发布至物料平台（需先发布 NPM 包）
arco sync
```


## 提供 Demo

Demo 目录位于 `src/demo`。你可以在此目录中加入多个 Demo，它们将被展示在物料平台的预览页。在 `src/demo/index.js` 中，通过 JSDoc 的语法提供物料及各个 Demo 的相关信息。

```javascript
// src/demo/index.js

/**
 * @file
 * @title 组件名
 * @memberOf 组件类型，例如：数据输入
 * @description 描述你的组件。
 */

/**
 * @title 基本用法
 * @description 描述你的例子
 */
import Basic from './basic.vue';

export const BasicDemo = () => Basic;
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
---
file: index
---

# TooltipButton

## 属性/Props

%%Props%%

### OtherProps

在这里你可以书写更多组件帮助文档。

## Demos

%%Demos%%
```

## 测试

测试目录位于 `src/__test__`。你可以在 `index.test.tsx` 中编写你的测试用例，在 `demo.test.tsx` 中可以进行基于 Demo 的快照测试。
