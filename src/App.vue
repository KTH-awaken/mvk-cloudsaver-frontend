<script setup lang="ts">
import { RouterView } from 'vue-router'
// import LayoutContainer from '@/components/LayoutContainer.vue'
import NavBar from "@/components/NavBar.vue";
// import WelcomeMessage from "@/components/WelcomeMessage.vue";
import Background from "@/components/Background.vue";
// import GlasCard from './components/GlasCard.vue';
import { useUsageStore } from '@/stores/usage';
import { useAnalysisStore } from './stores/analysis';
// const usageStore = useUsageStore()
// usageStore.fetchUsage()
const analysis = useAnalysisStore()
analysis.fetchNamespaces({ resource: 'AFRY', limit: 100 })
</script>
<template>

  <Background />
  <NavBar />
  <!-- Navbar here -->
  <header>

  </header>

  <!-- Route view -->
  <RouterView />

</template>
