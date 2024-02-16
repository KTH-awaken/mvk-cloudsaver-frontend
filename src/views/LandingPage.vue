<script lang="ts">
import { defineComponent } from 'vue'
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import HomeButton from "@/components/HomeButton.vue";

export default defineComponent({
    components: {
       WelcomeMessage,
       HomeButton,
    },
  
})
</script>


<template>
    <div class="flex">
        <WelcomeMessage class="welcome-message"/>
        <div class="pt-96 pl-[350px]">

            <HomeButton class="home-button"/>
        </div>
</div>

</template>


<style scoped>
.welcome-message {
    font-weight: bold;
    font-size: 35px; 
    color: var(--primary-dark);
    text-align: left;
    padding-left: 70px;
    padding-top: 320px; 
    font-family: 'Source Sans Pro', sans-serif;
}
</style>