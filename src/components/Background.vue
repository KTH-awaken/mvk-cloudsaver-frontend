
<template>
    <div class="bg-accent full-size">
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


export default {
    name: "BackgroundComponent",
    components: {
        TiltingCloud,
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
