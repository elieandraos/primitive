<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li
            v-for="service
            in services"
            :key="service.name"
            class="flex justify-between items-center py-4 font-light text-sm lowercase group"
        >
            <div class="flex items-center">
                <icon-dot class="w-4 h-4" :class="{'text-green-200': service.running, 'text-red-200': !service.running }"></icon-dot>
                <span class="mx-2">{{ service.name }}</span>
                <span class="text-gray-300">{{ service.version }}</span>
            </div>

            <div class="hidden cursor-pointer group-hover:block">
                <span class="text-xs mx-4" v-if="service.installed">uninstall</span>
                <span class="text-xs mx-4" v-else>install</span>

                <span class="text-xs mx-4" v-if="service.running">stop service</span>
                <span class="text-xs mx-4" v-if="service.installed && !service.running">start service</span>
            </div>
        </li>
    </ul>
</template>

<script setup>
import IconDot from '@/components/ui/icons/IconDot.vue'

const services = [
    { name: 'nginx', version: '16.0', installed: true, running: true },
    { name: 'php', version: '8.1', installed: true, running: true },
    { name: 'mysql', version: '7.7', installed: true, running: true },
    { name: 'postgresql', version: '10.1', installed: true, running: false },
    { name: 'mariadb', version: '11.6', installed: false, running: false },
    { name: 'redis', version: '5.2', installed: true, running: true },
]
</script>