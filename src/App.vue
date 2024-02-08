<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="max-w-[1000px] m-auto px-4">
    <nav class="flex items-center gap-4 py-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <div class="max-w-[1000px] m-auto px-4">
    <RouterView />
  </div>
</template>
