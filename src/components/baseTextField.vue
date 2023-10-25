<template>
    <div class="my-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
            <input :value="textValue"
            @input="checkValue($event.target.value)"
             type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="label" required>
        </div>
        <!-- <label for="error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
        <input   
          :value="textValue"
          @input="checkValue($event.target.value)"
          type="text" id="error" 
          class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Error input">
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Some error message.</p> -->
    </div>

</template>
<script setup>
import { onMounted, ref, watch } from "vue";

const inputValue = ref('')
const props = defineProps({
    value: String,
    title: String,
    textValue: String,
    label: String,
})

onMounted(()=>{
    inputValue.value = props.value
})
const emits = defineEmits([
    "update:model-value",
    'update:title',
    'myemit',
  "input"
]);
const checkValue = (value)=>{

    emits('myemit', value)
    
}
// watch(inputValue.value,()=>{
//     emits('input',inputValue.value)
// },
// {
//     immediate:false
// }
// )
</script>