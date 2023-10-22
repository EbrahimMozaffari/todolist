<script setup>
import deleteIcon from "../components/icons/iconCustomDelete.vue" 
import editIcon from "../components/icons/iconEdit.vue"
import duplicateIcon from "../components/icons/iconDuplicate.vue"
import dateIcon from "../components/icons/iconDate.vue"
import { ref } from "vue";

const toDoList = ref([])
// import TheWelcome from '@/components/TheWelcome.vue'
</script>
<template>
  <main class="flex items-center justify-center w-full mt-36">

    <div class="sm:w-11/12 md:w-11/12 lg:w-6/12 w-11/12 font-sans bg-white border border-gray-200 rounded-xl shadow  dark:bg-gray-800 dark:border-gray-700 p-3 ">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <svg width="40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"></path>
        </svg>
      </button>

      <div class="flex flex-row p-5 border mb-1 rounded-xl"  for="helper-checkbox"  >
        <div class="flex  items-center h-5">
           <input id="helper-checkbox" v-model="toDoList" aria-describedby="helper-checkbox-text" type="checkbox" value="200" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </div>
       <div class="ml-2 basis-11/12 text-sm  mr-1">
           <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
           <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
           <span class="flex mt-3 mr-2"><dateIcon />10/04/2023</span>
         </div>
       <div class="customIconPosition ">
         <deleteIcon class="mb-2" />
         <editIcon class="mb-2"  />
         <duplicateIcon class=""  />

       </div>
     </div>
     <div class="flex flex-row p-5 border mb-1 rounded-xl"  for="helper-checkbox"  >
      <div class="flex  items-center h-5">
         <input id="helper-checkbox" v-model="toDoList" aria-describedby="helper-checkbox-text" type="checkbox" value="200" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
     </div>
     <div class="ml-2 basis-11/12 text-sm  mr-1">
         <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
         <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
         <span class="flex mt-3 mr-2"><dateIcon />10/04/2023</span>
       </div>
     <div class="customIconPosition ">
       <deleteIcon class="mb-2" />
       <editIcon class="mb-2"  />
       <duplicateIcon class=""  />

     </div>
   </div>
   <div class="flex flex-row p-5 border mb-1 rounded-xl"  for="helper-checkbox"  >
    <div class="flex  items-center h-5">
       <input id="helper-checkbox" v-model="toDoList" aria-describedby="helper-checkbox-text" type="checkbox" value="200" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
   </div>
   <div class="ml-2 basis-11/12 text-sm  mr-1">
       <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
       <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
       <span class="flex mt-3 mr-2"><dateIcon />10/04/2023</span>
     </div>
   <div class="customIconPosition ">
     <deleteIcon class="mb-2" />
     <editIcon class="mb-2"  />
     <duplicateIcon class=""  />

   </div>
 </div>
     </div>

<!--    <TheWelcome />-->
  </main>
</template>
<style scoped>
.customIconPosition{
 
}
</style>