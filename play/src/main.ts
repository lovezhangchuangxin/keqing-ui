import { createApp } from 'vue'
import App from './App.vue'
import KqUI from '@keqing-ui/components'
import KqIcons from '@keqing-ui/icons'

const app = createApp(App)

app.use(KqUI)
app.use(KqIcons)
app.mount('#play')
