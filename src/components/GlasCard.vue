<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'GlasCard',
    props: {
        customClass: {
            type: String,
            required: false,
        },
    },
    setup() {
       const classes = "border-white border h-auto rounded-3xl bg-white bg-opacity-5 backdrop-blur-md shadow-lg p-6";
       return {classes}
    },

});
</script>


<template>
    <div :class="[classes, customClass]">
        <slot></slot>
    </div>
</template>
