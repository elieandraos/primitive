<template>
    <table class="w-full text-left">
        <tbody>
            <tr
                v-for="{name, installed, active} in versions"
                class="h-12 border-t border-gray-100"
                :key="name"
            >
                <td class="text-gray-400 text-md">{{ name}}</td>
                <td>
                    <span v-if="installed">
                        <span class="capitalize inline-flex items-center px-2.5 py-2 text-xs text-teal-600 rounded-full bg-teal-400 bg-opacity-10">
                            <icon-dot class="w-4 h-4 mr-2 text-teal-600"></icon-dot>
                            installed
                        </span>
                    </span>
                    <span v-else>
                        -
                    </span>
                </td>
                <td>
                    <span v-if="active">
                        <span class="capitalize inline-flex items-center px-2.5 py-2 text-xs text-blue-600 rounded-full bg-blue-400 bg-opacity-10">
                            <icon-dot class="w-4 h-4 mr-2 text-blue-600"></icon-dot>
                            default
                        </span>
                    </span>
                    <span v-if="installed && !active">
                        set default
                    </span>
                    <span v-if="!installed && !active">
                        -
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import IconDot from '@/components/ui/icons/IconDot.vue'

const versions = [
    { name: '8.1', installed: true, active: true },
    { name: '8.0', installed: false, active: false },
    { name: '7.4', installed: true, active: false },
    { name: '7.3', installed: false, active: false },
    { name: '7.2', installed: false, active: false },
    { name: '7.1', installed: false, active: false },
    { name: '7.0', installed: false, active: false },
    { name: '5.6', installed: false, active: false },
]
</script>