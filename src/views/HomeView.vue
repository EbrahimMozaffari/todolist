<template>
  <main class="flex items-center justify-center w-full mt-36">

    <div class="sm:w-11/12 md:w-11/12 lg:w-6/12 w-11/12 font-sans bg-white border border-gray-200 rounded-xl shadow  dark:bg-gray-800 dark:border-gray-700 p-3 ">
      <button @click="createItem()" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <svg width="40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"></path>
        </svg>
      </button>
      <div v-for="item in toDoList" :key="item.id">
        <listItemComponent :single-item="item" >
          <button class="mb-2" @click="deleteItem(item)"><deleteIcon /></button>
          <button class="mb-2" @click="editItem(item)"><editIcon /></button>
          <button @click="duplicateItem(item)"><duplicateIcon /></button>
        </listItemComponent>
      </div>
     </div>

  </main>
</template>

<script setup>
import deleteIcon from "@/components/icons/iconCustomDelete.vue" 
import editIcon from "@/components/icons/iconEdit.vue"
import duplicateIcon from "@/components/icons/iconDuplicate.vue"
import listItemComponent from "@/components/listItemComponent.vue"
import {uuidv4} from "@/helper/helper"
import store from "@/store";
import {onMounted, ref, watch, computed} from "vue";

//const toDoList = ref([])
const toDoList = computed(()=>{
  return store.getters['app/getToDoList']
})
const createItem = ()=>{
  
}
const deleteItem = (item) =>{
 console.log(item);
}

const editItem = (item) =>{
  console.log(item);
}

const duplicateItem = async(item) =>{
  let newItem = {...item};
  const newId = uuidv4()
  newItem.id = newId
  store.dispatch("app/addToDoList",newItem)
}

</script>
