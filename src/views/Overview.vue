<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import GlasCard from '@/components/GlasCard.vue'
import { useUsageStore } from '@/stores/usage';
import UsageChart from "../components/UsageChart.vue";
import LayoutContainer from '@/components/LayoutContainer.vue'


export default defineComponent({
    name: 'OverviewSection',
    components: {
        GlasCard,
        UsageChart,
        LayoutContainer,
    },
    setup: () => {
        const usageStore = useUsageStore()

        onMounted(() => {
            usageStore.fetchUsage()
            console.log(usageStore.usage);
        })

        return { usageStore }
    }
})
</script>

<template>
    <LayoutContainer>

        <GlasCard class="w-full mb-3">
            <h3 class="mb-4">Provider: CBH Cloud</h3>
            <div class="flex gap-10">
            <div class="flex flex-col justify-center items-center">
                <h1 class="font-semibold text-3xl">240</h1>
                <span>CO2</span>
            </div>
            

            <div class="flex flex-col justify-center items-center">
                <h1 class="font-semibold text-3xl">240</h1>
                <span>CO2</span>
            </div>
        </div>
        
    </GlasCard>
    <GlasCard class="w-full mb-3">
        <UsageChart />
    </GlasCard>
</LayoutContainer>
</template>
