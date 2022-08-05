<template>
    <div class="absolute bottom-0 w-full flex items-center flex-col">
        <div class="flex items-center w-auto py-4 text-gray-200 bg-white bg-opacity-70 rounded-xl cursor-pointer">
            <div class="hover:text-purple-300" :class="{ 'text-purple-300': activeRoute === 'home' }" @click="navigate('home')">
                <icon-home class="w-8 h-8 ml-12"></icon-home>
            </div>

            <div class="hover:text-lime-300" :class="{ 'text-lime-300': activeRoute === 'server' }" @click="navigate('server')">
                <icon-server class="w-8 h-8 mx-12"></icon-server>
            </div>

            <div class="hover:text-indigo-300" :class="{ 'text-indigo-300': activeRoute === 'phpversions' }" @click="navigate('phpversions')">
                <icon-php class="w-8 h-8"></icon-php>
            </div>

            <div class="hover:text-teal-300" :class="{ 'text-teal-300': activeRoute === 'packages' }" @click="navigate('packages')">
                <icon-truck class="w-8 h-8 mx-12"></icon-truck>
            </div>

            <div class="hover:text-orange-300" :class="{ 'text-orange-300': activeRoute === 'laravel' }" @click="navigate('laravel')">
                <icon-laravel class="w-8 h-8 mr-12 mt-1"></icon-laravel>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconPhp from '@/components/ui/icons/IconPhp.vue'
import IconHome from '@/components/ui/icons/IconHome.vue'
import IconTruck from '@/components/ui/icons/IconTruck.vue'
import IconServer from '@/components/ui/icons/IconServer.vue'
import IconLaravel from '@/components/ui/icons/IconLaravel.vue'

import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const navigate = (route) => {
    router.push({name: route})
}

const activeRoute = computed( () => router.currentRoute.value.name )
</script>