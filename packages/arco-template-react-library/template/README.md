# Arco 物料模板

## 快速开始

```
// 添加组件
npm run add:component -- YourComponentName

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

## 样式

在 `components/style` 下，你可以编写全局样式。

`components/*/style/index.tsx` 用于组件样式的按需加载，你需要在此文件中声明该组件依赖的其他组件样式。 例如：组件 A 内使用到了组件 B，则按需加载 A 的样式时同样需要加载 B 的样式，故需要在 `components/A/style/index.tsx` 中声明 `import '../../B/style'`。

## API 文档

**为了帮助他人更好地使用你的组件，请提供详细的 API 文档。**

### 书写注释

我们提供了自动化的文档生成工具，它从 TS 接口定义中提取注释自动生成属性文档。按照以下指引使用，为接口书写 tsDoc 类型的注释：

```typescript
/**
 * @title Button (必填，带有 `title` 描述的接口或者类型才会被收集)
 */
interface ButtonProps {
  /**
   * @zh 按钮尺寸 (属性的中文描述)
   * @en Size of Button (属性的英文描述)
   * @version 1.2.0 (可选，新增的属性在哪个版本开始支持)
   * @defaultValue 'default' (可选，属性的默认值)
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 按钮状态
   * @en Status of Button
   */
  status?: 'danger' | 'error' | 'success';
}
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

测试目录位于 `components/*/__test__`。你可以在 `index.test.tsx` 中编写你的测试用例，在 `demo.test.tsx` 中可以进行基于 Demo 的快照测试。

`npm run test` 命令允许你传入任何 `jest` 的命令行参数，例如 `npm run test -- --u` `npm run test -- --no-cache`。

## Demo

Demo 目录位于 `components/*/demo`。你可以在此目录中加入多个 Demo，它们将在 NPM 发布时一同被发布。
如果你添加了一个 Demo，那么你需要在 `stories/YourComponentName.jsx` 添加对应代码，才能在 Storybook 中预览到它。

[查看完整帮助文档](https://arco.design/cli)
