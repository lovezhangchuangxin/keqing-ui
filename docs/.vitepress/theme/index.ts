import KqUI from 'keqing-ui'
import 'keqing-ui/es/style.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './var.scss'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(KqUI)
  },
}

export default theme
