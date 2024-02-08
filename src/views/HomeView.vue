<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import FetchUserTest from '@/components/FetchUserTest.vue'
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  components: {
    HelloWorld,
    FetchUserTest
  },
  setup() {
    const counterStore = useCounterStore()
    return { counterStore }
  },
})

</script>

<template>
  <main>
    <!-- Your code here -->
    <HelloWorld message="Hello world component" />
    <button @click="counterStore.increment">Increment</button>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.decrement">Decrement</button>
    <FetchUserTest/>
  </main>
</template>
