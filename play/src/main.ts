import { createApp } from 'vue'
import App from './App.vue'
import KqUI from '@kq-ui/components'
import KqIcons from '@kq-ui/icons'

const app = createApp(App)

app.use(KqUI)
app.use(KqIcons)
app.mount('#play')
