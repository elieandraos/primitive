<template>
    <div class="w-full h-full flex items-center">
        <bubble-bg-animation>
            <div class="space-y-4">
                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400">
                    <img src="@/assets/php.png" alt="php" class="h-12">
                    <div>PHP v8.1.8</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-1 flex justify-between items-center text-gray-400">
                    <img src="@/assets/composer.png" alt="composer" class="h-16">
                   <div>Composer v2.2.4</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400">
                    <img src="@/assets/npm.png" alt="npm" class="h-10">
                    <div>NPM v8.1.3</div>
                </div>

                <div class="bg-white w-full rounded-lg px-6 py-4 flex justify-between items-center text-gray-400">
                    <img src="@/assets/laravel.png" alt="laravel" class="h-12">
                    <div>Laravel eco system</div>
                </div>
            </div>
        </bubble-bg-animation>

        <div class="w-full flex flex-col items-center justify-center">
            <primitive-logo class="w-72"></primitive-logo>
            <p>It's like laravel forge, but for your local environment</p>
        </div>
    </div>
</template>

<script setup>
import BubbleBgAnimation from '@/components/ui/BubbleBgAnimation.vue'
import PrimitiveLogo from '@/components/ui/PrimitiveLogo.vue'
</script>