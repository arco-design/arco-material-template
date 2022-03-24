# 工具库物料

[物料平台文档中心](https://arco.design/docs/material/guide)

## 快速开始

```
# 添加组件
npm run add:util -- YourUtilName

# 开发模式
npm run dev

# 构建
npm run build

# 发布至物料平台（需先发布 NPM 包）
arco sync
```

## 提供 Demo

Demo 目录位于 `src/*/demo`。在 `demo/index.js` 中，通过 JSDoc 的语法提供物料及各个 Demo 的相关信息。

```javascript
// src/demo/index.js

/**
 * @file
 * @name add
 * @memberOf 函数分类，例如：数组处理
 * @description 描述你的函数。
 * @author 物料作者
 */
import add from '../index';

/**
 * @name 基本用法
 * @description 描述你的例子
 */
export const basic = {
  exec: () => add(),
  result: null,
};
```

## API 文档

**为了帮助他人更好地使用你的组件，请提供详细的 API 文档。**

### 书写注释

我们提供了自动化的文档生成工具，它从 TS 接口定义中提取注释自动生成属性文档。按照以下指引使用，为接口书写 tsDoc 类型的注释：

```typescript
/**
 * @title Add (必填，带有 `title` 描述的接口或者类型才会被收集)
 */
type Add = (
  /**
   * @zh 加数
   * @en Base number
   * @version 1.2.0 (可选，新增的参数在哪个版本开始支持)
   * @defaultValue 'default' (可选，参数的默认值)
   */
  a: number,
  /**
   * @zh 被加数
   * @en Number added
   */
  b: number
) => number;

```

### 扩展 TEMPLATE.md

`TEMPLATE.md` 是用于自动文档生成的模板，你可以修改此文件添加更多组件的使用帮助信息，但请不要删除其原有的内容，否则可能导致内容替换失败。

```markdown
// TEMPLATE.md
---
file: index,interface (可以指定多个文档提取的入口文件，使用逗号隔开)
---

# Add

## 属性/Props

%%Props%%

### OtherProps

在这里你可以书写更多组件帮助文档。
```

## 测试

测试目录位于 `src/*/__test__`。默认情况下会根据 Demo 中的声明进行测试，你也可以在 `index.test.tsx` 中补充你的测试用例，。

`npm run test` 命令允许你传入任何 `jest` 的命令行参数，例如 `npm run test -- --u` `npm run test -- --no-cache`。
