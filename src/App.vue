<template>
  <div class="h-full bg-white">
      <div class="h-full p-12">
          <div class="w-full h-full flex items-center justify-center" v-if="cardLayout">
              <div class="w-4/5">
                  <bubble-bg-animation-lg>
                      <card :title="cardTitle">
                          <router-view></router-view>
                      </card>
                  </bubble-bg-animation-lg>
              </div>
          </div>

          <div v-else>
              <router-view></router-view>
          </div>
      </div>

      <bottom-toolbar></bottom-toolbar>
  </div>
</template>

<script setup>
import Card from '@/components/ui/Card.vue'
import BottomToolbar from '@/components/ui/BottomToolbar.vue'
import BubbleBgAnimationLg from '@/components/ui/BubbleBgAnimationLg.vue'

import { useRouter } from "vue-router"
import {ref} from "vue";

const router = useRouter()
const cardLayout = ref(false)
const cardTitle = ref('')

router.beforeEach((to) => {
    cardLayout.value = to.meta?.cardLayout === true
    cardTitle.value = to.meta?.title ? to.meta.title : ''
})
</script>