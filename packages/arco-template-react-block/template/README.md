# Arco 物料模板

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

// 查看当前 arco-scripts 使用的配置
npm run show:config -- webpack:component
```

## 测试

测试目录位于 `src/__test__`。你可以在 `index.test.tsx` 中编写你的测试用例。

`npm run test` 命令允许你传入任何 `jest` 的命令行参数，例如 `npm run test -- --u` `npm run test -- --no-cache`。

## DEMO

Demo 目录位于 `src/demo`。你可以在此目录中加入多个 Demo，它们将在 NPM 发布时一同被发布。
如果你添加了一个 Demo，那么你需要在 `stories/stories.jsx` 添加对应代码，才能在 Storybook 中预览到它。

[查看完整帮助文档](https://arco.design/cli)
