<template>
    <div class="w-full h-128 flex items-center">
        <bubble-bg-animation>
            <div class="space-y-4 font-thin">
                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center lowercase">
                    <icon-php class="h-8 text-indigo-500"></icon-php>
                    <div>PHP <span class="text-gray-300">8.1.8</span></div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center lowercase">
                    <img src="@/assets/logos/composer.png" alt="composer" class="-ml-2 h-12">
                    <div>Composer <span class="text-gray-300">2.2.4</span></div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center lowercase">
                    <icon-npm class="h-7 text-red-500" ></icon-npm>
                    <div>NPM <span class="text-gray-300">8.1.3</span></div>
                </div>

                <div class="bg-white w-full rounded-lg h-16 py-1 px-4 flex justify-between items-center lowercase">
                    <icon-mysql class="h-8 text-teal-500"></icon-mysql>
                    <div>MySQL <span class="text-gray-300">14.8.2</span></div>
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
import IconPhp from '@/components/ui/icons/IconPhp.vue'
import IconNpm from '@/components/ui/icons/IconNpm.vue'
import IconMysql from '@/components/ui/icons/IconMysql.vue'
import BubbleBgAnimation from '@/components/ui/BubbleBgAnimation.vue'
</script>