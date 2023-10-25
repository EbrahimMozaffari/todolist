<template>
    <div class="flex flex-row p-3 border border-gray-500  mb-1 rounded-xl"  for="helper-checkbox"  >
        <div class="flex  items-center h-5">
           <input :id="`helper-checkbox`+singleItem?.id" aria-describedby="helper-checkbox-text" type="checkbox" v-model="checkbox"  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </div>
       <div class="ml-2 basis-11/12 text-sm  mr-1">
           <label :for="`helper-checkbox`+singleItem?.id"     :class="[checkingDate ? 'text-white' : 'text-red-600',singleItem.status ? 'line-through' : '']"  class="font-medium">{{singleItem.title}}</label>
           <p id="helper-checkbox-text" :class="[checkingDate ? 'text-white' : 'text-red-600',singleItem.status ? 'line-through' : '']"  class="text-xs font-normal mt-1">{{singleItem.description}}</p>
           <span :class="[checkingDate ? 'text-white' : 'text-red-600',singleItem.status ? 'line-through' : '']" class="flex mt-1"><dateIcon class="mr-1" />{{showDate(singleItem.date)}}</span>
         </div>
       <div class="flex flex-col">
        <slot></slot>

       </div>
    </div>
</template>

<script setup>
import dateIcon from "../components/icons/iconDate.vue"
import {extractDate,formatDate} from "@/helper/helper"
import { computed, onMounted, ref, watch } from "vue";
import store from "@/store";
const props = defineProps({
  singleItem: {
    type: Object,
  },

});

const checkbox = ref(false)

const showDate = (date)=>{
  return extractDate(date)
}
const checkingDate = computed(()=>{
  const today = new Date();
  return (formatDate(props.singleItem.date) >= formatDate(today) || checkbox.value)
})
onMounted(()=>{
  checkbox.value = props.singleItem.status
  //checkDate();
})

watch(checkbox,async(value,oldValue)=>{
  let newItem = {...props.singleItem}
  newItem.status = value
  await store.dispatch('app/editToDoList',newItem)
})
</script>
