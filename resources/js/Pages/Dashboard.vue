<script setup>
import { Head } from '@inertiajs/vue3';
import MasterLayout from '@/Layouts/MasterLayout.vue';
import BarsIcon from '@/Components/Icons/BarsIcon.vue';
import customJs from '@/assets/custom.js';

import {onMounted} from 'vue';

onMounted(() => {
    customJs();
});
</script>

<template>
    <Head title="Dashboard" />

    <MasterLayout>
        <div class="main-wrapper">
            <div class="header flex w-full h-[60px] border-b-[1px] border-gray-200 bg-gray-500 dark:bg-gray-300 ">
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

            <div class="body flex justify-start">
                <div id="sidebar" class="sidebar left h-screen w-[0px] sm:min-w-[250px]">
                    <div class="h-full w-full border-1 border-gray-600 dark:border-gray-200 bg-gray-500 dark:bg-gray-300">
                        <!-- sidebar content here -->
                    </div>
                </div>

                <div class="right w-full">
                    <main>
                        <div class="w-full min-h-[900px] bg-gray-300">
                            <h1 class="text-green-600 flex justify-center">Body</h1>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </MasterLayout>
</template>

<style scoped>
.sidebar {
    transition: min-width 0.3s; /* Optional: Add a smooth transition effect */
  }

  #barsIcon.rotate {
    transform: rotate(180deg);
  }
</style>
