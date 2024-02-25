import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import store from "@/store";

const app = createApp(App)
import '@/style.css'
app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')
