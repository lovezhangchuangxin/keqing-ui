import { createApp } from 'vue'
import App from './App.vue'
import KqUI from 'keqing-ui'
import 'keqing-ui/es/style.css'

const app = createApp(App)

app.use(KqUI)
app.mount('#play')
