<script setup>
import BarsIcon from '@/Components/Icons/BarsIcon.vue';
</script>

<template>
    <div class="header sticky top-0 flex w-full h-[60px] border-b-[1px] border-gray-200 bg-gray-400 dark:bg-gray-800 ">
        <div class="w-[250px] hidden sm:block">
            <div class="sidebar-title px-6 py-4">
                <h3 class="text-xl text-white text-center">Dashboard</h3>
            </div>

        </div>
        <div class="relative">
            <div class="absolute top-5 left-3 sm:left-0" id="toggleButton">
                <BarsIcon id="barsIcon" class="text-2xl text-white duration-300 hover:scale-110" />
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
