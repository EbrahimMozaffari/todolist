<template>
  <main class="flex items-center justify-center w-full mt-36">

    <div class="sm:w-11/12 md:w-11/12 lg:w-6/12 w-11/12 font-sans bg-white border border-gray-200 rounded-xl shadow  dark:bg-gray-800 dark:border-gray-700 p-10">

        <div class="flex p-5 border mb-1 rounded-lg"  for="helper-checkbox"  >
          <div class="flex items-center h-5">
              <input id="helper-checkbox" v-model="toDoList" aria-describedby="helper-checkbox-text" type="checkbox" value="200" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
              <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
          </div>
        </div>
        <div class="flex p-5 border rounded-xl">
          <div class="flex items-center h-5">
              <input id="helper-checkbox1" v-model="toDoList" aria-describedby="helper-checkbox-text1" type="checkbox" value="100" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-checkbox1" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
              <p id="helper-checkbox-text1" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
          </div>
        </div>

     </div>

<!--    <TheWelcome />-->
  </main>
</template>

<script setup>
import { ref } from "vue";

const toDoList = ref([])
// import TheWelcome from '@/components/TheWelcome.vue'
</script>