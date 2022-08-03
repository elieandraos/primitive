<template>
  <div class="h-full bg-white">
      <div class="h-full p-12">
          <router-view></router-view>
      </div>
        <bottom-toolbar></bottom-toolbar>
  </div>
</template>

<script setup>
import BottomToolbar from '@/components/ui/BottomToolbar.vue'
</script>