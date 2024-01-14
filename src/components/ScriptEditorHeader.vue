<template>
 <div class="flex justify-between items-center mb-4">
    <h1 class="text-xl font-semibold">Edit Script - {{ scriptName }}</h1>
    <button  class="text-gray-800 hover:text-gray-600 focus:outline-none">
      <IconX @click="$emit('closeEditor')"/>
    </button>
  </div>
</template>
<script setup>
import IconX from '@/components/icons/IconX.vue'
const props = defineProps(['scriptName'])
</script>