<template>
 <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">Edit Script => {{ scriptName }}</h2>
    <button  class="text-gray-600 hover:text-gray-400 focus:outline-none">
      <IconX @click="$emit('closeEditor')"/>
    </button>
  </div>
</template>
<script setup>
import IconX from '@/components/icons/IconX.vue'
const props = defineProps(['scriptName'])
</script>