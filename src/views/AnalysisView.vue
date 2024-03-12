<script lang="ts">
import { defineComponent } from 'vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import GlasAccording from '@/components/According.vue';
import { useAnalysisStore } from '@/stores/analysis';
export default defineComponent({
    name: 'AnalysisView',
    components: {
        LayoutContainer,
        GlasAccording
    },
    setup() {
        const analysisStore = useAnalysisStore()   
        
        return { analysisStore };
    },
})
</script>

<template>
    <LayoutContainer>
        <h1 class="my-4 text-2xl font-semibold">Analysis</h1>
        <div class="flex flex-col gap-3">
            <GlasAccording v-for="pod in analysisStore.usage" :key="pod.pod_name" :title="pod.pod_name" :content="pod.content" />
        </div>
    </LayoutContainer>
</template>