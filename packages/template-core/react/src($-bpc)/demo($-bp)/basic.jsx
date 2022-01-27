/**
 * 通常情况下，你无需为 区块/页面 类型的物料特意书写 Demo，物料平台会默认渲染此物料的入口进行展示。如需将此 Demo 展示至物料平台，请按以下步骤修改项目：
 * 1. 为 src/README.md 添加以下内容
 * ## Demos
 * %%Demos%%
 * 2. 修改 package.json 中的 docgen 命令为 arco-scripts docgen
 */
import React from 'react';
import MaterialEntry from '@CONST_PACKAGE_NAME@';

export default () => <MaterialEntry />;
