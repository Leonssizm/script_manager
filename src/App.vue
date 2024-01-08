<template>
  <v-layout class="rounded rounded-md">
      <v-app-bar v-if="router.currentRoute.value.path === '/'" title="Script Manager" class="bg-black">
          <NavigationDrawerToggle @click="navigationDrawerIsVisible = !navigationDrawerIsVisible"/>
      </v-app-bar>
      <v-app-bar v-else-if="router.currentRoute.value.path === '/manual-checkers'" title="Manual Checkers" class="bg-black">
        <NavigationDrawerToggle @click="navigationDrawerIsVisible = !navigationDrawerIsVisible"/>
      </v-app-bar>
    <v-navigation-drawer style="background-color:#011d1c" v-if="navigationDrawerIsVisible">
      <v-list class="mt-16">
        <!-- <v-list-item title="Navigation drawer"></v-list-item> -->
        <RouterLink to="/" class="pl-[1.5rem]"><v-btn class="mb-4 w-[200px]">script_manager.js</v-btn></RouterLink>
        <RouterLink to="/manual-checkers" class="pl-[1.5rem]"><v-btn class="mb-4 w-[200px]">manual_checkers.py</v-btn></RouterLink>
        <v-btn class="ml-[1.5rem] w-[200px]" disabled>coming_soon.go</v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-gray-500">
      <RouterView/>
    </v-main>
  </v-layout>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import NavigationDrawerToggle from '@/components/buttons/NavigationDrawerToggleButton.vue'
const router = useRouter();
let navigationDrawerIsVisible = ref(true);

</script>

