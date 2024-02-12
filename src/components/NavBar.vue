  <script>
  import LayoutContainer from '@/components/LayoutContainer.vue'
import { defineComponent } from 'vue'

  export default defineComponent({
    // components: {
    //    LayoutContainer,
    // },
  
})
  </script>

<template>
  <!-- <LayoutContainer> -->

    <nav class="p-[70px] flex items-center justify-between py-2">
      
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/CloudSaverLogo.png" alt="CloudSaver Logo" class="logo" width="70" height="70" >
      </RouterLink>
      
      <div class="flex items-center gap-4">
        <!-- <HomeButton></HomeButton> -->
        <button class="text-primary-dark text-lg" id="signInButton">Sign In</button>
      </div>
    
    </nav>
  <!-- </LayoutContainer> -->
</template>

<style scoped>

</style>