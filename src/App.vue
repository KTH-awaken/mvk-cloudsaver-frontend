<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
</script>
<template>
  <header class="max-w-[1000px] m-auto px-4">
    <NavBar></NavBar>
  </header>
  <div class="max-w-[1000px] m-auto px-4">
    <RouterView />
  </div>
</template>
