  <template>
    <div class="floating-blob rotated" :style="blobStyle">
      <img :src="imgSrc" alt="Floating Blob" :width="blobWidth" :height="blobHeight" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FloatingBlob',
    props: {
      imgSrc: {
        type: String,
        required: true
      },
      blobWidth: {
        type: Number,
        required: true
      },
      blobHeight: {
        type: Number,
        required: true
      },
      interval: {
        type: Number,
        required: true
      },
      startX: {
        type: Number,
        required: true
      },
      startY: {
        type: Number,
        required: true
      },
      rotation: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        currentX: this.startX,
        currentY: this.startY,
        intervalId: null,
      };
    },
    computed: {
      blobStyle() {
        return {
          transform: `translate(${this.currentX}px, ${this.currentY}px) rotate(${this.rotation}deg)`,
          transition: 'transform 10s ease-in-out',
        };
      }
    },
    mounted() {
      this.animateBlob();
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
    },
    methods: {
      animateBlob() {
        this.intervalId = setInterval(() => {
          this.currentX = Math.random() * (window.innerWidth - this.blobWidth);
          this.currentY = Math.random() * (window.innerHeight - this.blobHeight);
        }, this.interval);
      }
    }
  };
  </script>
  
  <style scoped>
  .floating-blob {
    opacity: 70%;
    position: fixed;
    will-change: transform;
  }
  </style>
  