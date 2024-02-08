<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import GlasCard from '@/components/GlasCard.vue'; // Import the component statically

export default defineComponent({
  components: {
    GlasCard,
  },
  setup() {
    const userStore = useUserStore();

    onMounted(() => {
      userStore.fetchUsers();
    });

    return { userStore };
  },
});

</script>


<template>
  <div>
    <div class="flex gap-4 mb-4">
      <button class="bg-slate-200 p-2 rounded-lg " @click="userStore.fetchUsers">Reload</button>
      <button class="bg-slate-200 p-2 rounded-lg" @click="userStore.testError">Throw Error</button>
    </div>
    <div v-if="userStore.isLoading">Loading...</div>
    <div class="bg-red-50 text-red-500 p-3 rounded-lg" v-if="userStore.error">{{ userStore.error }}</div>
    <ul v-else class="flex flex-wrap gap-2">
      <li v-for="user in userStore.users" :key="user.id">
        <GlasCard>
          <div>
            <img class="w-[75px] h-[75px] object-cover rounded-full" :src="user.image" alt="avatar">
            <p>{{ user.firstName }} {{ user.lastName }} </p>
            <p class="text-xs opacity-50">{{ user.email }}</p>
          </div>
        </GlasCard>
      </li>
    </ul>
  </div>
</template>