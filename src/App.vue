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
  <div class="max-w-[1000px] m-auto px- relative">
    <div class="bg-green-500 w-24 h-24 absolute left-1/2 top-28"></div>
    <RouterView />
  </div>
</template>
