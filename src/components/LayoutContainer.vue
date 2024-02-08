<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LayoutContainer',
    props: {
        customClass: {
            type: String,
            required: false,
        },
    },
    setup() {
        const classes = "max-w-[1200px] mx-auto px-4 "
        return { classes };
    },
});

</script>

<template>
    <div :class="[classes, customClass]">
        <slot></slot>
    </div>
</template>