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

## API 文档

**为了帮助他人更好地使用你的组件，请提供详细的 API 文档。**

### 扩展 TEMPLATE.md

`TEMPLATE.md` 是用于自动文档生成的模板，你可以修改此文件添加更多组件的使用帮助信息，但请不要删除其原有的内容，否则可能导致内容替换失败。

```markdown
// TEMPLATE.md
---
file: index
---

## Demos

%%Demos%%
```

## DEMO

Demo 书写位置位于 `src/demo/index.js`，这些 Demo 还将被自动用于单元测试。

[查看完整帮助文档](https://arco.design/cli)
