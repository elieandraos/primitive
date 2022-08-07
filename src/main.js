import { createApp } from 'vue'
import App from './App.vue'
import '@/index.css'
import '@/directives/tooltip/tooltip.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "./routes"

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

import directives from "./directives"

const app = createApp(App)
app.use(router)
directives(app)
app.mount('#app')

