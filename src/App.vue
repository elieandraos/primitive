<template>
  <div class="h-full bg-white">
      <div class="h-full pl-20 py-20 pr-10">
          <router-view></router-view>
      </div>
      <div class="absolute left-0 bottom-0 w-full py-2 px-6 flex justify-between border-t shadow-lg text-gray-500">
          <div class="flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
          </div>
          <div class="flex flex-col justify-center items-center">
              <img class="h-8 w-8" src="@/assets/netlify.svg" alt="frontend tooling">
          </div>
          <div class="flex flex-col justify-center items-center">
              <img class="h-8 w-8" src="@/assets/vite.svg" alt="frontend tooling">
          </div>
          <div class="flex flex-col justify-center items-center">
              <img class="h-8 w-8" src="@/assets/laravel.svg" alt="laravel">
          </div>
      </div>
  </div>
</template>