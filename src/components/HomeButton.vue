<!-- HomeButton.vue -->
<template>
  <button class="home-button" @click="navigateToO">Optimize Your Cloud</button>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HomeButton',
  components: {
    // RouterLink
  },
  

}
</script>

<style scoped>
  .home-button {
    height: 80px;
    width: 240px;
    background-color: var(--primary-dark);
    color: #FFFFFF; 
    border-radius: 25px; 
    font-size: 20px; 
    text-decoration: none; 
    border: none; 
    cursor: pointer; 
    font-family: 'Source Sans Pro', sans-serif; 
    display: inline-block; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
    transition: background-color 0.3s; 
    font-weight: bold;
}

.home-button:hover {
  background-color: #3B7A57; 
}
</style>