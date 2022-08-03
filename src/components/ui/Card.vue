<template>
    <div class="h-full bg-white bg-opacity-80 rounded-lg p-6">
        <div class="font-roboto font-light text-2xl text-black mb-6">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue"

defineProps({
    title: String
})
</script>