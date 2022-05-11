import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
