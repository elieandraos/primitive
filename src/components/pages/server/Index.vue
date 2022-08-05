<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="w-4/5">
            <bubble-bg-animation-lg>
                <card title="Server">
                    <ul role="list" class="divide-y divide-gray-200">
                        <li
                            v-for="service
                            in services"
                            :key="service.name"
                            class="flex justify-between items-center py-4 font-light text-sm lowercase text-gray-500"
                        >
                            <div class="flex items-center">
                                <span class="mr-2">{{ service.name }}</span>
                                <span class="text-gray-300">{{ service.version }}</span>
                            </div>

                            <div :class="service.status">
                                <icon-dot class="w-4 h-4"></icon-dot>
                            </div>
                        </li>
                    </ul>
                </card>
            </bubble-bg-animation-lg>
        </div>
    </div>
</template>

<script setup>
import Card from "@/components/ui/Card.vue"
import IconDot from '@/components/ui/icons/IconDot.vue'
import BubbleBgAnimationLg from "@/components/ui/BubbleBgAnimationLg.vue"

const services = [
    { name: 'nginx', version: '16.0', status: 'text-green-200' },
    { name: 'php', version: '8.1', status: 'text-green-200' },
    { name: 'mysql', version: '7.7', status: 'text-green-200' },
    { name: 'postgresql', version: '10.1', status: 'text-red-200' },
    { name: 'mariadb', version: '11.6', status: 'text-red-200' },
    { name: 'redis', version: '5.2', status: 'text-green-200' },
]
</script>