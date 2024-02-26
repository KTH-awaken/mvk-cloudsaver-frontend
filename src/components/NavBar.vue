

<template>
  <!-- <LayoutContainer> -->

    <nav class="p-[70px] flex items-center justify-between py-2">
      
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/CloudSaverLogo.png" alt="CloudSaver Logo" class="logo" width="70" height="70" >
      </RouterLink>

      <div v-if="user">
        Hello, {{ user.email }}!
        <button @click="logout">Log out</button>
      </div>
      <div v-else>
        <RouterLink to="/Login" class="flex items-center">
          <div class="flex items-center gap-4">
            <!-- <HomeButton></HomeButton> -->
            <button class="text-primary-dark text-lg" id="signInButton">Sign In</button>
          </div>
        </RouterLink>
      </div>


    </nav>
  <!-- </LayoutContainer> -->
</template>

<style scoped>

</style>

  <script lang="ts">
  import { defineComponent, onMounted, ref,Ref } from 'vue';
  import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
  import { logoutUser } from '@/stores/login'; // Justera importvägen efter din faktiska projektstruktur

  // Definiera en reaktiv referens som kan hålla en User eller null
  const currentUser: Ref<User | null> = ref(null);

  // Funktion för att sätta currentUser till en användare eller null
  function setUser(user: User | null) {
    currentUser.value = user;
  }


  export default defineComponent({
    setup() {
      // Ange att user kan vara antingen User eller null
      const user = ref<User | null>(null);

      onMounted(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
          user.value = firebaseUser;
        });
      });

      const logout = () => {
        logoutUser();
        user.value = null; // Tillåtet tack vare unionstypen User | null
      };

      return {
        user,
        logout,
      };
    },
  });
  </script>