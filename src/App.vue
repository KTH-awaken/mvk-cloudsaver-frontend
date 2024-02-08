<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutContainer from '@/components/LayoutContainer.vue'
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
</script>
<template>

  <LayoutContainer>

    <!-- Navbar here -->
    <NavBar />
    <header>
      <nav class="flex items-center gap-4 py-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <!-- Route view -->
    <div class="bg-green-500 w-24 h-24 absolute left-1/2 top-28"></div>
    <RouterView />

  </LayoutContainer>
</template>
