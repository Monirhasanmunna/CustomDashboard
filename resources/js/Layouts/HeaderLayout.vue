<script setup>
import BarsIcon from '@/Components/Icons/BarsIcon.vue';
</script>

<template>
    <div class="header sticky top-0 flex space-x-2 w-full h-[60px] border-b-[1px] shadow-md shadow-gray-300 border-gray-300 dark:border-gray-500 bg-[#f5f7f9] dark:bg-gray-800 text-slate-800 dark:text-slate-200">
        <div class="w-[251px] hidden sm:block">
            <div class="sidebar-title px-2 py-4 border-r-[1px] border-gray-300  dark:border-gray-500">
                <h3 class="text-xl  text-center">Dashboard</h3>
            </div>

        </div>
        <div class="relative">
            <div class="absolute top-5 left-3 sm:left-0" id="toggleButton">
                <BarsIcon id="barsIcon" class="text-2xl  duration-300 hover:scale-110" />
            </div>
            <!-- header right side content here -->
        </div>
    </div>
</template>

<style scoped>
#barsIcon.rotate {
    transform: rotate(180deg);
  }
</style>
