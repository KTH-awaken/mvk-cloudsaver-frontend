<template >
    <div>
        <Chart id="energy-chart" :options="chartOptions" :data="chartData" />
    </div>
</template>
  

<script lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useUsageStore } from '@/stores/usage'
import { defineComponent, ref, watchEffect } from 'vue';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default defineComponent({
    name: 'EnergyChart',
    components: { Chart: Line },
    setup() {
        console.log("hello1")
        const usageStore = useUsageStore();
        // usageStore.fetchUsage();
        const chartData = ref({ labels: [] as any, datasets: [] as any });




        watchEffect(() => {
            if(usageStore.usage.usage == undefined || usageStore.usage.usage.length == 0){
                return;
            }

            console.log("hello3")
            console.log(usageStore.usage.usage);
            const labels = usageStore.usage.usage.map(item => new Date(item.timestamp).toLocaleTimeString());
            const cpuUsageData = usageStore.usage.usage.map(item => item.cpu_usage);
            console.log(labels, cpuUsageData);

            chartData.value = {
                labels: labels,
                datasets: [{
                    label: 'Energy in Watts',
                    backgroundColor: '#ffffff',
                    borderColor: 'rgb(255, 99, 132)',
                    data: cpuUsageData,
                }],
            };
        });

        const chartOptions = ref({
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        });

        return {
            chartData,
            chartOptions
        }
    }
})
</script>