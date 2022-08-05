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
    { name: 'nginx', version: '16.0.9', status: 'text-green-200' },
    { name: 'mysql', version: '7.7.5', status: 'text-green-200' },
    { name: 'redis', version: '5.2.3', status: 'text-green-200' },
    { name: 'postgresql', version: '10.2.3', status: 'text-red-200' }
]
</script>