import { createApp, onMounted } from 'vue'
import App from './App.vue'
//import router from './router'
import AOS from 'aos'

import './assets/main.css' // Tailwind CSS or plain CSS
import 'aos/dist/aos'

const app = createApp(App)
//app.use(router)
app.mount('#app')

Aos.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
})