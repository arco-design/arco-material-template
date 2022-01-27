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
 * @title 名称
 * @memberOf 数据录入
 * @description 一段对于物料的描述。
 * @author 物料作者
 */

/**
 * @title 基础用法
 * @description 一个物料最基本的使用方式。
 */
export { default as Basic } from './basic';
```

## 测试

测试目录位于 `src/__test__`。你可以在 `index.test.tsx` 中编写你的测试用例。

`npm run test` 命令允许你传入任何 `jest` 的命令行参数，例如 `npm run test -- --u` `npm run test -- --no-cache`。
