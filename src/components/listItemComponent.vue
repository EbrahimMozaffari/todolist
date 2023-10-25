<template>
    <div class="flex flex-row p-5 border mb-1 rounded-xl"  for="helper-checkbox"  >
        <div class="flex  items-center h-5">
           <input :id="`helper-checkbox`+singleItem?.id" aria-describedby="helper-checkbox-text" type="checkbox" value="200" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </div>
       <div class="ml-2 basis-11/12 text-sm  mr-1">
           <label :for="`helper-checkbox`+singleItem?.id" class="font-medium text-gray-900 dark:text-gray-300">{{singleItem.title}}</label>
           <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{{singleItem.description}}</p>
           <span class="flex mt-3 text-white"><dateIcon class="mr-1" />{{changeDate(singleItem.date)}}</span>
         </div>
       <div class="flex flex-col">
        <slot></slot>

       </div>
    </div>
</template>

<script setup>
import dateIcon from "../components/icons/iconDate.vue"
import {extractDate} from "@/helper/helper"
const props = defineProps({
  singleItem: {
    type: Object,
  },

});

const changeDate = (date)=>{
  return extractDate(date)
}
</script>
