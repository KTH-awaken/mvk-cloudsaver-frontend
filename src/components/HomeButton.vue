<!-- HomeButton.vue -->
<template>
  <RouterLink to="/tutorial">
    <button class="home-button" @click="navigateToO">Optimize Your Cloud</button>
  </RouterLink>
</template>

<script>

export default {
  name: 'HomeButton',
  components: {
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
    cursor: pointer; 
    font-family: 'Source Sans Pro', sans-serif; 
    display: inline-block; 
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10); */
    transition: background-color 0.3s; 
    font-weight: bold;
}

.home-button:hover {
  background-color: var(--primary); 
}
</style>