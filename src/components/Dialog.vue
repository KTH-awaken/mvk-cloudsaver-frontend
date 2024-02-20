<template>
    <div v-if="isVisible" class="dialog-backdrop" @click.self="closeDialog">
      <div class="dialog-content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <button @click="closeDialog">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'SimpleDialog',
    props: {
      title: String,
      text: String,
      buttonText: String,
      isVisible: Boolean,
    },
    emits: ['update:isVisible'],
    setup(props, { emit }) {
      const { isVisible } = toRefs(props);
  
      function closeDialog() {
        emit('update:isVisible', false);
      }
  
    return { closeDialog, isVisibleValue: isVisible.value };
    },
  });
  </script>
  
  <style scoped>
  .dialog-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  