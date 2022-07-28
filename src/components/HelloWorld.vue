<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const popup = () => {
    window.alert('button clicked')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/"  class="text-green-600">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" class="text-green-600">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank" class="text-green-500">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank" class="text-green-600">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
   <button class="bg-red-700 text-white mx-2 px-4 py-2 rounded hover:bg-red-500" @click="popup">alert</button>
</template>
