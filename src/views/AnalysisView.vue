<script lang="ts">
import { defineComponent, ref } from 'vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import GlasAccording from '@/components/According.vue';
export default defineComponent({
    name: 'AnalysisView',
    components: {
        LayoutContainer,
        GlasAccording
    },
    setup() {
        const isExpanded = ref(false);
        const data = ref([
            { title: "This Namespace 1 data", content: [{ key: "Pod User Service kjnd1kj4", value: "44 kwh" }, { key: "Pod User Service kj12n3kjn", value: "44 kwh" }] },
            { title: "This Namespace 2 data", content: [{ key: "Pod User Account lkndfj3", value: "12 kwh" }, { key: "Pod User Account lk1n2l3kn", value: "44 kwh" }] },
            { title: "This Namespace 3 data", content: [{ key: "Pod User Message lk12ml3k", value: "34 kwh" }, { key: "Pod User Message lk1m2lk3n", value: "44 kwh" }] }
        ]);
        const toggle = () => isExpanded.value = !isExpanded.value;
        return { isExpanded, toggle, data };
    },
})
</script>

<template>
    <LayoutContainer>
        <h1 class="my-4 text-2xl font-semibold">Analysis</h1>
        <div class="flex flex-col gap-3">
            <GlasAccording v-for="item in data" :key="item.title" :title="item.title" :content="item.content" />
        </div>
    </LayoutContainer>
</template>