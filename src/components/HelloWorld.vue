<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank" class="text-green-600">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" class="text-green-600">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank" class="text-green-500">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank" class="text-green-600">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
