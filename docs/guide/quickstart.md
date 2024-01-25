# 快速开始

本节将介绍如何在项目中使用 Keqing UI。

## 完整引入

```ts{3,5,11}
import { createApp } from 'vue'
// 导入组件库插件
import KqUI from 'keqing-ui'
// 导入组件库样式
import 'keqing-ui/es/style.css'
import App from './App.vue'

const app = createApp(App)

// 注册组件库
app.use(KqUI)
app.mount('#app')
```

## 按需引入

暂不支持按需引入和自动导入。
