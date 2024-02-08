
<template>
  <nav class="flex items-center justify-between py-2">

    <RouterLink to="/" class="flex items-center">
      <img src="@/assets/CloudSaverLogo.png" alt="CloudSaver Logo" class="logo" sizes="70,70">
    </RouterLink>

    <!-- Home and About in the middle -->
    <div class="flex items-center gap-4">
      <HomeButton></HomeButton>
      <RouterLink to="/about">About</RouterLink>
    </div>


    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>