<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="w-4/5">
            <bubble-bg-animation-lg>
                <card title="Localhost">
                    <ul role="list" class="divide-y divide-gray-200">
                        <li
                            v-for="service
                            in services"
                            :key="service.name"
                            class="flex justify-between items-center p-4 font-light text-sm lowercase text-gray-500"
                        >
                            <div class="flex items-center">
                                <img :src="`/src/assets/logos/${service.name}.svg`" alt="" class="h-6">
                                <span class="mx-2">{{ service.name }}</span>
                                <span class="text-gray-300">{{ service.version }}</span>
                            </div>
                            <div>
                                <svg class="h-4 w-4" :class="service.status" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </card>
            </bubble-bg-animation-lg>
        </div>
    </div>
</template>

<script setup>
import BubbleBgAnimationLg from "@/components/ui/BubbleBgAnimationLg.vue"
import Card from "@/components/ui/Card.vue"

const services = [
    { name: 'php', version: '8.1.8', status: 'text-green-200' },
    { name: 'nginx', version: '16.0.9', status: 'text-green-200' },
    { name: 'mysql', version: '7.7.5', status: 'text-green-200' },
    { name: 'redis', version: '5.2.3', status: 'text-green-200' },
    { name: 'postgresql', version: '10.2.3', status: 'text-red-200' }
]
</script>