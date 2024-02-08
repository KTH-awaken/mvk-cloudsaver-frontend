// stores/counter.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', {
  // State
  state: () => {
    return { 
      count: ref(0) 
    }
  },
  // Getters
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    }
  },
  // Actions
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
