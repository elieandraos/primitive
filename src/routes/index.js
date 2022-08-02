import Home from '@/components/pages/home/Index.vue'
import Laravel from '@/components/pages/laravel/Index.vue'

const routes =  [
    { path: '/', component: Home, name: 'home' },
    { path: '/laravel', component: Laravel, name: 'laravel' },
]

export default routes