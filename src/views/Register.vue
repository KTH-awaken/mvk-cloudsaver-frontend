

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { useRouter } from 'vue-router'; // Importera useRouter hook
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/stores/login';
import GlasCard from "@/components/GlasCard.vue";

export default defineComponent({
  name: 'regis-er',
  components: {GlasCard},
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

<template>
  <div class="register-container">
    <GlasCard class="">
      <h2 class="top-text">Register</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <input class="input-name" type="text" placeholder="Email">
        </div>
        <div class="form-group">
          <input class="input-name" type="text" placeholder="Password">
        </div>
        <div class="button-group">
          <button type="submit" class="bg-primary-dark text-white p-2 rounded-md w-1 button hover:bg-primary">Register</button>
          <!--          <button @click="navigateToRegister" class="bg-primary-dark text-white p-2 rounded-md w-1 button hover:bg-primary">Register</button>-->
        </div>
      </form>
    </GlasCard>
  </div>
</template>

<style scoped>
.input-name{
  width: 100%;
  outline: solid 3px var(--primary-dark);
  padding: 20px;
  border-radius: 10px;
  background: transparent;

}

.signup-text {
  text-align: center;
  font-size: 14px;
  color: var(--primary-dark);
}

.signup-text a {
  color: var(--primary-dark);
  text-decoration: underline;
  display: inline-block; /* Make the link inline-block to center it */
  margin-top: 10px; /* Add some top margin for spacing */
}

::placeholder {
  color: var(--primary-dark);
  opacity: 1;
}
.top-text {
  text-align: center;
  font-size: 24px;
  color: var(--primary-dark); /* Set the color to var(--primary-dark) */
}
/* Centrera innehållet vertikalt och horisontellt */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Anpassa stilar för formulärelement, knappar och andra element som behöver anpassas */
.register-form {
  width: 300px;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 3px;
}

.button-group {
  display: flex;
  justify-content: space-between; /* Add space between buttons */
}

.button{
  width: 100%;
}
</style>
