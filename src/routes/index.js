import Home from '@/components/pages/home/Index.vue'
import Server from '@/components/pages/server/Index.vue'
import Packages from '@/components/pages/packages/Index.vue'
import Laravel from '@/components/pages/laravel/Index.vue'
import PHPVersion from '@/components/pages/phpversions/Index.vue'

const routes =  [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/php-versions',
        component: PHPVersion,
        name: 'phpversions',
        meta: { cardLayout: true, title: 'PHP Versions' }
    },
    {
        path: '/server',
        component: Server,
        name: 'server',
        meta: { cardLayout: true, title: 'Server' }
    },
    {
        path: '/packages',
        component: Packages,
        name: 'packages',
        meta: { cardLayout: true, title: 'Global Packages' }
    },
    {
        path: '/laravel',
        component: Laravel,
        name: 'laravel',
        meta: { cardLayout: true, title: 'Laravel' }
    },
]

export default routes