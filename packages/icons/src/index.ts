import type { App } from 'vue'
import * as icons from './components'

/**
 * 插件，用于注册所有图标组件
 */
const KqIcons = (app: App) => {
  for (const [key, value] of Object.entries(icons)) {
    app.component(key, value)
  }
}

export default KqIcons
export * from './components'
