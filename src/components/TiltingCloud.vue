<template>
  <div class="tilting-blob">
    <img :src="imgSrc" alt="Blob" :style="blobStyle" />
  </div>
</template>

<script>
export default {
  name: 'TiltingBlob',
  props: {
    imgSrc: String,
    blobWidth: Number,
    blobHeight: Number,
    posX: Number,
    posY: Number,
    rotation: Number,
  },
  data() {
    return {
      tiltX: 0,
      tiltY: 0,
    };
  },
  computed: {
    blobStyle() {
      return {
        width: `${this.blobWidth}px`,
        height: `${this.blobHeight}px`,
        position: 'fixed',
        left: `${this.posX}px`,
        top: `${this.posY}px`,
        transform: `rotateX(${this.tiltX}deg) rotateY(${this.tiltY}deg)`,
        transformOrigin: 'center',
        transition: 'transform 0.2s ease-out',
      };
    },
  },
  methods: {
    handleGlobalMouseMove(event) {
      const rect = this.$el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = this.blobWidth / 2;
      const centerY = this.blobHeight / 2;

      const tiltIntensity = 10; // Increase this for more aggressive tilt
      this.tiltY = (x - centerX) / centerX * tiltIntensity;
      this.tiltX = -(y - centerY) / centerY * tiltIntensity;
    },
    resetTilt() {
      this.tiltX = 0;
      this.tiltY = 0;
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.handleGlobalMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleGlobalMouseMove);
  },
};
</script>

<style scoped>
.tilting-blob img {
  display: block;
  max-width: 100%;
  height: auto;
  transition: transform 0.9s ease-out; /* Smooth transition for tilting effect */
}
</style>


   