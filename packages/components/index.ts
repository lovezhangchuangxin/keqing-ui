import { App } from 'vue'
import { version } from './package.json'
import * as components from './components'

export * from './button'

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export default install
export { version }
