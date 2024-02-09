<template>
    <div class="floating-blob">
      <h1>test: {{ blobWidth }}</h1>
      <img src="@/assets/GreenBlob.png" alt="Floating Blob" :width="blobWidth" :height="blobHeight"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FloatingBlob',
    props: {
      blobWidth: {
        type: Number,
        required: true
      },
      blobHeight: {
        type: Number,
        required: true
      }
    },
    mounted() {
      this.animateBlob();
    },
    methods: {
      animateBlob() {
        // Get a reference to the DOM element
        const blob = this.$el;
        // Function to change the position of the blob
        function float() {
          const x = Math.random() * (window.innerWidth - blob.offsetWidth);
          const y = Math.random() * (window.innerHeight - blob.offsetHeight);
          blob.style.transform = `translate(${x}px, ${y}px)`;
        }
        // Start the animation
        float();
        // Set the float to happen at intervals
        setInterval(float, 5000); // Adjust the interval as needed
      }
    }
  };
  </script>
  
  <style scoped>
  .floating-blob {
    position: fixed;
    will-change: transform; /* Optimizes animations */
    transition: transform 10s ease-in-out; /* Adjust time for speed of movement */
  }
  </style>
