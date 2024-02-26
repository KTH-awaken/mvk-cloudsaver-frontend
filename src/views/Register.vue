<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { useRouter } from 'vue-router'; // Importera useRouter hook
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/stores/login';

export default defineComponent({
  name: 'Register',
  setup() {
    const router = useRouter(); // Använd useRouter hook för att få tillgång till routern

    const email = ref('');
    const password = ref('');

    const register = () => {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Användaren skapades framgångsrikt
            console.log('Användarregistrering lyckades', userCredential.user);
            // Omdirigera användaren till landningssidan
            router.push({ name: 'LandingPage' }); // Ersätt 'LandingPage' med namnet på din landningssidas route
          })
          .catch((error) => {
            console.error('Fel vid användarregistrering:', error.code, error.message);
            // Här kan du hantera fel, till exempel visa ett felmeddelande till användaren
          });
    };

    return {
      email,
      password,
      register,
    };
  },
});
</script>