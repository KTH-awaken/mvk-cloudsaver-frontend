<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutContainer from '@/components/LayoutContainer.vue'
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import Background from "@/components/Background.vue";
import GlasCard from './components/GlasCard.vue';
import { useUsageStore } from '@/stores/usage';
const usageStore = useUsageStore()
usageStore.fetchUsage()
</script>
<template>
  
  <Background />
    <NavBar />
    <header>

    </header>
    
    <RouterView />

</template>
