<!-- HomeButton.vue -->
<template>
  <RouterLink to="/" class="home-button">Home</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HomeButton',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.home-button {
  /* Add your styles here */
}
</style>