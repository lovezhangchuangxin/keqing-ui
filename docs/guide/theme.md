# 自定义主题

Keqing UI 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。

## 更换主题色

所有的主题色都是通过 CSS 变量实现的，因此可以通过覆盖 CSS 变量的方式来更换主题色。

创建一个 `theme.css` 文件，然后在 `main.ts` 中引入：

::: code-group

```css [theme.css]
:root {
  --kq-primary-color: #409eff;
}
```

```ts{6} [main.ts]
import { createApp } from 'vue'
import KqUI from 'keqing-ui'
import 'keqing-ui/es/style.css'
import App from './App.vue'
// 导入自定义主题样式
import './theme.css'

const app = createApp(App)

app.use(KqUI)
app.mount('#app')
```

:::
