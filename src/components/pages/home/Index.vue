<template>
    <div class="w-full h-128 flex items-center">
        <bubble-bg-animation>
            <div class="space-y-4 font-thin">
                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/php.svg" alt="php" class="h-12">
                    <div>PHP 8.1.8</div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/composer.png" alt="composer" class="-ml-2 h-12">
                   <div>Composer 2.2.4</div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center text-gray-400 lowercase">
                    <img src="@/assets/npm.svg" alt="npm" class="h-7">
                    <div>NPM 8.1.3</div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center text-gray-400 lowercase cursor-pointer">
                    <img src="@/assets/mysql.svg" alt="mySql" class="h-10">
                    <div>MySQL 14.8.2</div>
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