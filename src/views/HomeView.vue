<template>
  <main class="flex items-center justify-center w-full mt-36">

    <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-10" v-if="isOpen">
      <div class="absolute w-full h-full bg-gray-900 opacity-50" ></div>
  
      <div class="absolute max-h-full max-w-xl rounded-xl" >
        <div class="container overflow-hidden md:rounded-xl rounded-xl">
          <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-xl shadow dark:bg-gray-700 ">
                  <!-- <button @click="isOpen = !isOpen" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button> -->
                  <div class="p-6 text-center">
                      <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this TODO?</h3>
                      <button @click="confirmDelete" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Yes, I'm sure
                      </button>
                      <button @click="isOpen = !isOpen" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </div>
    
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

const isOpen = ref(false)
const selectedId = ref('')
const modalShow = ref(false)
const toDoList = computed(()=>{
  return store.getters['app/getToDoList']
})
const createItem = ()=>{
  modalShow.value =true
}
const deleteItem = (item) =>{
  selectedId.value = item.id
  isOpen.value = true

// console.log(items)
//  console.log(item);
}
const confirmDelete = ()=>{
  let items = [...toDoList.value]
  const index = items.findIndex((i) => {
  return i.id == selectedId.value;
})
items.splice(index, 1);
store.dispatch("app/setToDoList",items)
isOpen.value = false
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
