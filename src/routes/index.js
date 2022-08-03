import Home from '@/components/pages/home/Index.vue'
import Server from '@/components/pages/server/Index.vue'
import Packages from '@/components/pages/packages/Index.vue'
import Laravel from '@/components/pages/laravel/Index.vue'

const routes =  [
    { path: '/', component: Home, name: 'home' },
    { path: '/server', component: Server, name: 'server' },
    { path: '/packages', component: Packages, name: 'packages' },
    { path: '/laravel', component: Laravel, name: 'laravel' },
]

export default routes