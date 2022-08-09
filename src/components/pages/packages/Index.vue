<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li
            v-for="pckg
            in npmPackages"
            :key="pckg.name"
            class="flex justify-between items-center py-4 font-light text-sm lowercase group"
        >
            <div class="grow">
                <div class="flex items-center">
                    <icon-dot class="w-4 h-4" :class="{'text-green-200': pckg.installed, 'text-red-200': !pckg.installed }"></icon-dot>
                    <span class="mx-2 text-black">{{ pckg.name }}</span>
                    <span class="text-gray-300">{{ pckg.version }}</span>
                    <span class="bg-yellow-100 text-yellow-800 text-xs mr-2 px-2.5 py-0.5 rounded" v-if="pckg.updateAvailable">update available</span>
                </div>
                <div class="grow text-xs ml-6 text-slate-400 hidden group-hover:block">
                    {{ pckg.description }}
                </div>
            </div>


            <div class="w-24 flex invisible cursor-pointer group-hover:visible text-right">
                <span class="text-xs mx-4" v-tooltip="'github repos'">
                    <icon-github class="w-7 h-7 text-gray-300 hover:text-slate-700"></icon-github>
                </span>

                <span class="text-xs mx-4" v-tooltip="'uninstall package'" v-if="pckg.installed">
                    <icon-remove class="w-7 h-7 text-gray-300 hover:text-red-400"></icon-remove>
                </span>
                <span class="text-xs mx-4" v-tooltip="'install package'" v-else>
                    <icon-download class="w-7 h-7 text-gray-300 hover:text-green-400"></icon-download>
                </span>
            </div>
        </li>
    </ul>
</template>

<script setup>
import IconDownload from '@/components/ui/icons/IconDownload.vue'
import IconRemove from '@/components/ui/icons/IconRemove.vue'
import IconGithub from '@/components/ui/icons/IconGithub.vue'
import IconDot from '@/components/ui/icons/IconDot.vue'

const npmPackages = [
    {
        name: 'npm',
        version: '8.1',
        installed: true,
        updateAvailable: true,
        description: 'package manager for the Node JavaScript platform',
    },
    {
        name: '@elieandraos/create-nodejs-package',
        version: '1.0.15',
        installed: true,
        updateAvailable: false,
        description: 'a cli tool that scaffolds everything you need to develop nodeJs packages'
    },
    {
        name: '@elieandraos/primitive',
        version: '1.0.0',
        installed: true,
        updateAvailable: false,
        description: 'a cli tool that manages your local environment for laravel/web development'
    },
    {
        name: 'laravel-echo-server',
        version: '3.6.2',
        installed: true,
        updateAvailable: true,
        description: 'NodeJs server for Laravel Echo broadcasting with Socket.io'
    },
    {
        name: 'npm-check-updates',
        version: '4.2.1',
        installed: false,
        updateAvailable: false,
        description: 'upgrades your package.json npm dependencies to the latest versions, ignoring specified versions.'
    },

]
</script>