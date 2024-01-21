import { createApp } from 'vue'
import App from './App.vue'
import KqUI from '@kq-ui/components'

const app = createApp(App)

app.use(KqUI)
app.mount('#play')
