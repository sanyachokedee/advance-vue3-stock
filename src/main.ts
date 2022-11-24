import { createApp } from 'vue'

// Import Tailwind css and Customer.css file
import './tailwind/app.css'
import './tailwind/custom.css'

import App from './App.vue'
import router from './router/index'

import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

// createApp(App).mount('#app') ของเดิม แต่เราใช้แบบข้างบน
