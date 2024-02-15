
<template>
    <div class="bg-accent full-size">
        <!-- <FloatingBlob :imgSrc="GreenBlobImg" :blobWidth=800 :blobHeight=800 :interval=5000 :startX=1000 :startY=1000 :rotation=90 /> -->
        <!-- <FloatingBlob :imgSrc="GreenBlobImg2" :blobWidth=1000 :blobHeight=1000 :interval=10000 :startX=0 :startY=0 :rotation=0 /> -->
        <!-- <FloatingBlob :imgSrc="GreenBlobImg" :blobWidth=1000 :blobHeight=1000 :interval=10000 :startX=1000 :startY=0 :rotation=180 /> -->
        <TiltingCloud :imgSrc="GreenBlobImg4" :posX=-200 :posY=-200 :blobWidth=1130 :blobHeight=1000 :rotation=0 ></TiltingCloud>
        <TiltingCloud :imgSrc="GreenBlobImg" :posX="calculatePosition(60)" :posY=-400 :blobWidth=1300 :blobHeight=1000 :rotation=0 ></TiltingCloud>
        <TiltingCloud :imgSrc="GreenBlobImg" :posX="calculatePosition(60)" :posY=700 :blobWidth=1400 :blobHeight=1000 :rotation=0 ></TiltingCloud>
    </div>
</template>

<script lang="ts">
import GreenBlob from "@/assets/GreenBlob.png"
import GreenBlob2 from "@/assets/GreenBlob2.png"
import GreenBlob3 from "@/assets/GreenBlob3.png"
import GreenBlob4 from "@/assets/GreenBlob4.png"
import TiltingCloud from "@/components/TiltingCloud.vue"
// import FloatingBlob from "@/components/FloatingBlob.vue";


export default {
    name: "BackgroundComponent",
    components: {
        TiltingCloud,
        // FloatingBlob,
    },
    data() {
        return {
            GreenBlobImg: GreenBlob,
            GreenBlobImg2: GreenBlob2,
            GreenBlobImg3: GreenBlob3,
            GreenBlobImg4: GreenBlob4,
            screenWidth: window.innerWidth,
        }
    },
    mounted(){
        this.updateScreenWidth();
        window.addEventListener('resize', this.updateScreenWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateScreenWidth);
    },
    methods: {
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
        calculatePosition(percentage: number) {
            return this.screenWidth * (percentage / 100);
        }
    }
}
</script>

<style scoped>
.full-size {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
</style>
