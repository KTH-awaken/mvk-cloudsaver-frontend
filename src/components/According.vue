<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import GlasCard from '@/components/GlasCard.vue';

export default defineComponent({
    name: 'GlasAccording',
    components: {
        GlasCard
    },
    setup() {
        const isExpanded = ref(false);
        const toggle = () => isExpanded.value = !isExpanded.value;
        return { isExpanded, toggle };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: Array as PropType<{ key: string; value: string; }[]>,
            required: true
        }
    }
})
</script>

<template>
    <GlasCard @click="toggle" class="cursor-pointer">
        <div class="flex justify-between items-center">
            <h3 class="font-medium text-lg">{{ title }}</h3>
            <p :class="['text-2xl', { 'rotate-180': !isExpanded }]">^</p>
        </div>
        <div class="flex flex-col gap-3" v-if="isExpanded">
            <br>
            <div v-for="item in content" :key="item.value" class="flex items-center gap-2">
                <p class="">{{ item.key }}: </p><p class="text-2xl">{{ item.value }}</p>
            </div>
        </div>
    </GlasCard>
</template>