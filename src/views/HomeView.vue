<template>
  <main class="flex items-center justify-center w-full mt-36">

    <div class="createToDoModal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10 " v-if="createModalOpen">
      <div class="absolute w-full h-full bg-gray-900 opacity-90" ></div>
  
      <div class=" max-h-full w-6/12 mx-auto rounded-xl" >
        <div class="container overflow-hidden md:rounded-xl rounded-xl">
          <div class="relative w-full  max-h-full">
              <div class="relative bg-white rounded-xl shadow dark:bg-gray-700 ">
           
                  <div class="p-6 ">
                    <p v-if="errorForm" class="my-2 text-sm text-red-600 dark:text-red-500">Please fill all fields! </p>
                    <form >
                      <datepicker format="d-MM-yyyy" placeholder="Select Date" v-model="date" class="customDate bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></datepicker>

                      <!-- <datepicker v-model="date" class="mb-3 customDate w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="uniquename"></datepicker> -->
                      <BaseTextField   :textValue="title" @myemit ="title = $event" label="ToDo Title"  />
                      <BaseTextField   :textValue="description" @myemit ="description = $event" label="ToDo Description"  />
                      
                          
                      <!-- <div class="mb-6">
                        <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
                        <input type="text" id="success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Success input">
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p>
                      </div>
                      <div>
                        <label for="error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
                        <input type="text" id="error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Error input">
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
                      </div> -->
                     
                        
                        <!-- <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this TODO?</h3> -->
                        <button @click="createConfirm" data-modal-hide="popup-modal" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 green:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Create
                        </button>
                        <button @click="createModalOpen = !createModalOpen" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">cancel</button>
                      </form>
                    </div>
              </div>
          </div>
        </div>
      </div>
  </div>
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
          <button class="mb-2 text-white" @click="deleteItem(item)"><deleteIcon /></button>
          <button class="mb-2 text-white" @click="editItem(item)"><editIcon /></button>
          <button class="text-white" @click="duplicateItem(item)"><duplicateIcon /></button>
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
import createFormComponent from "@/components/createFormComponent.vue"
import {uuidv4,extractDate} from "@/helper/helper"
import store from "@/store";
import {onMounted, ref, watch, computed} from "vue";
import BaseTextField from "../components/baseTextField.vue"

import Datepicker from 'vuejs-datepicker';



onMounted(()=>{
  
})
const isOpen = ref(false)
const createModalOpen = ref(false)
const selectedId = ref('')
const createForm = ref(null)
const title =ref('')
const description =ref('')
const date =ref(null)
const errorForm =ref(false)
const toDoList = computed(()=>{
  return store.getters['app/getToDoList']
})
const createItem = ()=>{
  createModalOpen.value = true
}
const createConfirm = async()=>{
const newId = uuidv4()
if(title.value && description.value && date.value){
  const dateString = await extractDate(date.value);
  errorForm.value= false
  await store.dispatch("app/addToDoList",{title:title.value,description:description.value,date:dateString,id:newId.value})
  createModalOpen.value = false
  title.value,description.value,date.value = ''
}else{
  errorForm.value= true
}

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
<style scoped>
.createToDoModal .myInput,.customDate{
  color:black;
  border-radius: 10px;
}
.customDate input{
  width:100% !important;
}

</style>
<style>
.vdp-datepicker input {
  width: 100% !important;
  background: none !important;
}
</style>