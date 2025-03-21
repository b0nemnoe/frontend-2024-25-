import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { OiLogoGithub, BiGithub, ViFileTypeVue,  ViFileTypeJava, ViFileTypeCsharp2, ViFileTypePython} from "oh-vue-icons/icons";
addIcons(OiLogoGithub, BiGithub, ViFileTypeVue,  ViFileTypeJava, ViFileTypeCsharp2, ViFileTypePython);
import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
