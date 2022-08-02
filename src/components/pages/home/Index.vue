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

                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400 lowercase cursor-pointer" @click="navigate('laravel')">
                    <img src="@/assets/laravel.png" alt="laravel" class="h-12">
                    <div>9.0.13</div>
                </div>
            </div>
        </bubble-bg-animation>

        <div class="w-full flex flex-col items-center justify-center">
            <primitive-logo class="w-48 mb-4"></primitive-logo>
            <p class="text-gray-500 italic">It's like laravel forge</p>
            <p class="text-gray-500 italic">but for your local environment</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PrimitiveLogo from '@/components/ui/PrimitiveLogo.vue'
import BubbleBgAnimation from '@/components/ui/BubbleBgAnimation.vue'

const router = useRouter()

const navigate = (route) => {
    router.push({ name: route})
}
</script>