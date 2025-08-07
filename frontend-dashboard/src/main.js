import './assets/main.css'

// src/main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import router from router folder

const app = createApp(App)
app.use(router) // gunakan router
app.mount('#app') // pasang app ke elemen #app
//createApp(App).mount('#app')
