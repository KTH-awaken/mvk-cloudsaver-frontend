<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import GlasCard from '@/components/GlasCard.vue';
import { useUsageStore } from '@/stores/usage';
import EnergyChart from "../components/UsageChart.vue";
import LayoutContainer from '@/components/LayoutContainer.vue';
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
        const usageStore = useUsageStore();

        // Since your store now returns an array of Data objects, adjust accordingly
        const resourceName = computed(() => {
            // Check if usage data is available and has at least one Data object
            if (usageStore.data.length > 0 && usageStore.data[0].resource_name) {
                return usageStore.data[0].resource_name;
            }
            return 'Unknown'; // Default value or handling when no data is available
        });

        onMounted(() => {
            usageStore.fetchUsage();
            // Updated to reflect the new data structure
            console.log("Data fetched: ", usageStore.data);
        });

        return { resourceName };
    }
})
</script>


<template>
    <LayoutContainer>

        <GlasCard class="w-full mt-3">
            <div class="text-container-small mb-6">
                <h3 class="mb-4 medium-text">{{ resourceName }} Total Usage</h3>
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
            </div>

            <div class="flex flex gap-3 justify-between m-t-5">
                <div class="outlined-container w-full mb-3">
                    <p class="mb-20 text-lg">Energy Consumption Overview</p>
                    <EnergyChart class="min-h-80" />
                </div>
                <!-- <div class="outlined-container w-full mb-3">
                    <p class="mb-4 text-lg">Energy Cost Estimation Overview</p>
                    <PriceChart class="min-h-80"/>
                </div> -->
            </div>
        </GlasCard>

    </LayoutContainer>
</template>
<style>
   .outlined-container{
        width: 100%;
        height: 30rem;
        outline: solid 3px var(--primary-dark);
        padding: 20px;
        border-radius: 10px;
    }
    .text-container-small{
        max-width: fit-content;
    }
    .medium-text{
    font-weight: bold;
    font-size: 22px; 
    color: var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    text-align: start;
    width: 100%;
}

</style>
