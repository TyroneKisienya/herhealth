import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Aos, { AOS } from 'aos'

import './assets/main.css' // Tailwind CSS or plain CSS
import 'aos/dist/aos'

const app = createApp(App)
app.use(router)
app.mount('#app')
AOS.init()
