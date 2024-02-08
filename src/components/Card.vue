<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CustomCard',
    props: {
        customClass: {
            type: String,
            required: false,
        },
    },
    setup() {
       const classes = "border-white border rounded-3xl bg-white bg-opacity-5 backdrop-blur-md shadow-lg p-4";
       return {classes}
    },

});
</script>


<template>
    <div :class="[classes, customClass]">
        <slot></slot>
    </div>
</template>
