<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li
            v-for="service
            in services"
            :key="service.name"
            class="flex justify-between items-center py-4 font-light text-sm lowercase group"
        >
            <div class="w-48 flex items-center">
                <icon-dot class="w-4 h-4" :class="{'text-green-200': service.running, 'text-red-200': !service.running }"></icon-dot>
                <span class="mx-2">{{ service.name }}</span>
                <span class="text-gray-300">{{ service.version }}</span>
            </div>

            <div class="grow italic invisible text-center text-gray-300 group-hover:visible">
                {{ getStatus(service) }}
            </div>

            <div class="w-48 invisible cursor-pointer group-hover:visible text-right">
                <span class="text-xs mx-4" v-if="service.running" v-tooltip="'stop service'">
                    <icon-stop class="w-7 h-7 text-gray-300 hover:text-orange-400"></icon-stop>
                </span>

                <span class="text-xs mx-4" v-if="service.installed && !service.running" v-tooltip="'start service'">
                    <icon-play class="w-7 h-7 text-gray-300 hover:text-green-400"></icon-play>
                </span>

                <span class="text-xs mx-4" v-tooltip="'uninstall service'" v-if="service.installed">
                    <icon-remove class="w-7 h-7 text-gray-300 hover:text-red-400"></icon-remove>
                </span>
                <span class="text-xs mx-4" v-tooltip="'install service'" v-else>
                    <icon-download class="w-7 h-7 text-gray-300 hover:text-green-400"></icon-download>
                </span>
            </div>
        </li>
    </ul>
</template>

<script setup>
import IconDot from '@/components/ui/icons/IconDot.vue'
import IconPlay from '@/components/ui/icons/IconPlay.vue'
import IconStop from '@/components/ui/icons/IconStop.vue'
import IconDownload from '@/components/ui/icons/IconDownload.vue'
import IconRemove from '@/components/ui/icons/IconRemove.vue'

const services = [
    { name: 'nginx', version: '16.0', installed: true, running: true },
    { name: 'php', version: '8.1', installed: true, running: true },
    { name: 'mysql', version: '7.7', installed: true, running: true },
    { name: 'postgresql', version: '10.1', installed: true, running: false },
    { name: 'mariadb', version: '11.6', installed: false, running: false },
    { name: 'redis', version: '5.2', installed: true, running: true },
]

const getStatus = ({installed, running}) => {
    const installedStatus = installed ? 'service installed' : 'service not installed'
    const runningStatus = running ? 'running' : 'not running'

    return !installed ? installedStatus : `${installedStatus} and ${runningStatus}`

}
</script>