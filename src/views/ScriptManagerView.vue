<template>
  <div v-if="pageIsLoaded">
    <div class="flex justify-center items-center h-screen">
      <div class="w-36 h-36 rounded-full border-8 border-dotted border-red-700 animate-spin-slow"></div>
    </div>
  </div>
  <v-table theme="dark" class="m-4" v-else>
    <TableHeaders/>
    <tbody>
      <tr v-for="scripts in scriptManager" :key="scripts.id">
        <td>{{ scripts.id }}</td>
        <td>{{ scripts.name }}</td>
        <td>{{ scripts.cluster }}</td>
        <td v-if="scripts.config.active" class="text-green-700 font-extrabold">ON</td> 
        <td v-else class="text-red-700 font-extrabold">OFF</td>
        <td>{{calculateTimeDifference(scripts.lastRun) }}</td> 
        <td class="break-words">{{ scripts.description }}</td>
        <td>
          <EditButton @click="openEditor(scripts.id)"/>
        </td>
      </tr>
    </tbody>
  </v-table>
  <div v-if="editorIsLoaded" class="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4 shadow-md">
  <ScriptEditorHeader @closeEditor="editorIsLoaded = false" :scriptName=scriptData[0].name />
  <div class="overflow-auto">
    <JsonEditorVue v-model="specificScriptConfig" class="w-[50rem] h-[25rem]"/>
  </div>
  <div class="flex justify-between">
     <UpdateButton @click="updateScriptData"/> 
     <CancelButton @click="editorIsLoaded = false"/>
  </div>
</div>

</template>

<script setup>
import TableHeaders from '@/components/TableHeaders.vue'
import ScriptEditorHeader from '@/components/ScriptEditorHeader.vue';
import JsonEditorVue from 'json-editor-vue'
import UpdateButton from '@/components/buttons/UpdateButton.vue';
import EditButton from '@/components/buttons/EditButton.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { formatTimeDifference } from '@/helpers/formatters.js'
import {getAllScripts, updateScript} from '@/services/api.js'
import CancelButton from '@/components/buttons/CancelButton.vue';

let scriptManager = ref(''), scriptData=ref([]), specificScriptConfig=ref([])
let pageIsLoaded = ref(true), editorIsLoaded = ref(false)

onMounted(() => {
   fetchAndUpdateScripts()
})

function fetchAndUpdateScripts() {
  getAllScripts().then((scripts) => {
    scriptManager.value = scripts.data.data;
    pageIsLoaded.value = false;
  });

}

function calculateTimeDifference(lastRun) {
  const timeDifference = (new Date() - new Date(lastRun)) / 1000;
  return formatTimeDifference(timeDifference);
};

  function openEditor(scriptId){
    getAllScripts().then((scripts) => {
      scriptData.value = scripts.data.data.filter((script) => script.id === scriptId)
      specificScriptConfig.value = scriptData.value[0].config
      editorIsLoaded.value = true
    })

  }

  function updateScriptData(){
    updateScript(scriptData.value[0].id, specificScriptConfig.value).then(() => {
      editorIsLoaded.value=false
      fetchAndUpdateScripts()
      specificScriptConfig.value = []
      scriptData.value = []
    })

  }
</script>
