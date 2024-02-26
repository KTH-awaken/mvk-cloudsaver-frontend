<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <!-- Navigeringsknapp till registreringssidan -->
    <button @click="navigateToRegister">Register</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'; // Importera useRouter hook
import { loginUser } from '@/stores/login';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter(); // Använd useRouter hook för att få tillgång till routern

    const login = () => {
      loginUser(email.value, password.value);
    };

    // Funktion för att navigera till registreringssidan
    const navigateToRegister = () => {
      router.push({ name: 'Register' }); // Använd routerns namn eller path '/register' beroende på din routerkonfiguration
    };

    return {
      email,
      password,
      login,
      navigateToRegister, // Gör funktionen tillgänglig i mallen
    };
  },
});
</script>
