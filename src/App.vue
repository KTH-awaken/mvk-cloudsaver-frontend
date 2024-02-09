<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutContainer from '@/components/LayoutContainer.vue'
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import Background from "@/components/Background.vue";
</script>
<template>
  
  <LayoutContainer>
    <Background />
    <!-- Navbar here -->
    <NavBar />
    <header>

    </header>

    <!-- Route view -->
    <RouterView />

  </LayoutContainer>
</template>
