
<template>
  <nav class="flex items-center justify-between py-2">

    <RouterLink to="/" class="flex items-center">
      <img src="@/assets/CloudSaverLogo.png" alt="CloudSaver Logo" class="logo" width="70" height="70" >
    </RouterLink>

    <div class="flex items-center gap-4">
      <HomeButton></HomeButton>
        <button class="text-primary-dark" id="signInButton">Sign In</button>
      </div>

  </nav>
</template>
<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>