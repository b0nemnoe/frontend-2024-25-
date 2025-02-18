import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  Toast  from 'vue-toastification'
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

const options = {
    position: "top-right",
    timeout: 2000,
    closeOnClick: true
};

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
