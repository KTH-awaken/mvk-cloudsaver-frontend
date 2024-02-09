<template>
    <div class="bg-accent full-size">
        <FloatingBlob :blobWidth=1000 :blobHeight=1000 />
        <FloatingBlob :blobWidth=500 :blobHeight=500 />
        <FloatingBlob :blobWidth=200 :blobHeight=200 />
    </div>
</template>

<script lang="ts">
import FloatingBlob from "@/components/FloatingBlob.vue";

export default {
    name: "BackgroundComponent",
    components: {
        FloatingBlob,
    },
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
