<template>
    <div>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div
                class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                v-for="pckg in composerPackages"
                :key="pckg.name"
            >
                <div class="flex items-center">
                    <icon-installer class="text-sky-500 h-9 w-9 mr-4" v-if="pckg.name === 'installer'"></icon-installer>
                    <icon-valet class="text-amber-500 h-12 mr-4" v-if="pckg.name === 'valet'"></icon-valet>

                    <div>
                        <span class="capitalize">{{  pckg.name }}</span>
                        <div class="text-slate-400 text-xs">{{ pckg.description }}</div>
                    </div>
                </div>
                <div class="absolute bottom-0 text-right inset-x-0 bg-gray-50 px-2 py-2 sm:px-4">
                    <span class="text-xs border-b pb-0.5 border-gray-600 cursor-pointer hover:text-blue-600 hover:border-blue-600">
                        uninstall
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconInstaller from '@/components/ui/icons/IconInstaller.vue'
import IconValet from '@/components/ui/icons/IconValet.vue'

const composerPackages = [
    {
        name: 'installer',
        version: '4.3.9',
        installed: true,
        updateAvailable: false,
        description: 'Laravel application installer',
        githubRepos: 'https://github.com/laravel/installer'
    },
    {
        name: 'valet',
        version: '3.1.9',
        installed: true,
        updateAvailable: false,
        description: 'A blazing fast Laravel development environment',
        githubRepos: 'https://github.com/laravel/valet'
    },
]
</script>