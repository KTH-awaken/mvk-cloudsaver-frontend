<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import GlasCard from '@/components/GlasCard.vue'
import { useUsageStore } from '@/stores/usage';
import EnergyChart from "../components/UsageChart.vue";
import LayoutContainer from '@/components/LayoutContainer.vue'
import PriceChart from "../components/PriceChart.vue";

export default defineComponent({
    name: 'OverviewSection',
    components: {
        GlasCard,
        EnergyChart,
        PriceChart,
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
                    <h1 class="font-semibold text-3xl">4973</h1>
                    <span>SEK</span>
                </div>


                <div class="flex flex-col justify-center items-center">
                    <h1 class="font-semibold text-3xl">490</h1>
                    <span>kwh</span>
                </div>
            </div>

        </GlasCard>
        <div class="flex gap-2 justify-between">
            <GlasCard class="w-full mb-3">
                <p class="mb-4 text-lg">Energy Consumption Overview</p>
                <EnergyChart />
            </GlasCard>
            <GlasCard class="w-full mb-3">
                <p class="mb-4 text-lg">Energy Cost Estimation Overview</p>
                <PriceChart />
            </GlasCard>
        </div>

    </LayoutContainer>
</template>
