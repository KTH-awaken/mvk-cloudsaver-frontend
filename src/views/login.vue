<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '@/stores/login';
import GlasCard from '@/components/GlasCard.vue';


export default defineComponent({
  name: 'log-in',//todo kolla om den måste hetea Login
  components: {
    GlasCard,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      loginUser(email.value, password.value);
    };

    const navigateToRegister = () => {
      router.push({ name: 'Register' });
    };

    return {
      email,
      password,
      login,
      navigateToRegister,
    };
  },
});
</script>

<template>
  <div class="login-container">
    <GlasCard class="">
      <h2 class="top-text">Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input v-model="email" class="input-name" type="text" placeholder="Email">
        </div>
        <div class="form-group">
          <input v-model="password" class="input-name" type="password" placeholder="Password">
        </div>
        <div class="button-group">
          <button type="submit" class="bg-primary-dark text-white p-2 rounded-md w-1 button hover:bg-primary">Login</button>
        </div>
        <div style="display:flex; padding-top: 5px; font-size: 14px;">
          <p class="signup-text">Not a member?&nbsp;&nbsp;&nbsp;</p>
          <p style="text-decoration: underline"><router-link to="/Register">Signup now</router-link></p>
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
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Anpassa stilar för formulärelement, knappar och andra element som behöver anpassas */
.login-form {
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

