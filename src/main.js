import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import createPinia from Pinia
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia() // Create Pinia instance

createApp(App)
  .use(router)
  .use(pinia) // Use Pinia as a plugin
  .mount('#app')
