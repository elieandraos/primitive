<template>
    <div class="relative w-full h-128">
        <div class="top-0 -left-4 w-96 h-96 bg-purple-300" :class="bubbleClassList"></div>
        <div class="top-0 -right-4 w-96 h-96 bg-yellow-300" :class="bubbleClasses"></div>
        <div class="-bottom-20 -left-20 w-96 h-96 bg-pink-300 animation-delay-4000" :class="bubbleClasses"></div>
        <div class="-bottom-20 right-10 w-96 h-96 bg-cyan-300 animation-delay-4000" :class="bubbleClasses"></div>

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