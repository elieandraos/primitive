<template>
    <div class="w-full h-full flex items-center">
        <bubble-bg-animation>
            <div class="space-y-4">
                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/php.png" alt="php" class="h-10">
                    <div>8.1.8</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-1 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/composer.png" alt="composer" class="h-16">
                   <div>2.2.4</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/npm.png" alt="npm" class="h-8">
                    <div>8.1.3</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400 lowercase cursor-pointer">
                    <img src="@/assets/laravel.svg" alt="laravel" class="h-12">
                    <div>9.0.13</div>
                </div>
            </div>
        </bubble-bg-animation>

        <div class="w-full flex flex-col items-center justify-center">
            <div class="text-6xl text-slate-700 capitalize font-marck">primitive</div>
            <p class="text-slate-400 font-roboto font-thin text-xl text-center mt-2">It's like laravel forge<br/> but for your local environment</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PrimitiveLogo from '@/components/ui/PrimitiveLogo.vue'
import BubbleBgAnimation from '@/components/ui/BubbleBgAnimation.vue'
</script>