<template>
    <div class="relative w-full max-w-lg h-96">
        <div class="top-0 -left-4 w-72 h-72 bg-purple-300" :class="bubbleClassList"></div>
        <div class="top-0 -right-4 w-72 h-72 bg-yellow-300 animation-delay-4000" :class="bubbleClasses"></div>
        <div class="-bottom-8 left-20 w-72 h-72 bg-pink-300 animation-delay-4000" :class="bubbleClasses"></div>

        <div class="absolute z-10 w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"

const bubbleClasses = [ 'absolute', 'rounded-full', 'mix-blend-multiply', 'filter', 'blur-xl', 'opacity-70', 'animate-blob', '-z-0' ]
const bubbleClassList = computed(() => bubbleClasses.join(' '))
</script>