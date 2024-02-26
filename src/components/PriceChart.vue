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
    name: 'PriceChart',
    components: { Chart: Line },
    setup() {
        const usageStore = useUsageStore();
        const chartData = ref({ labels: [] as any, datasets: [] as any });




        watchEffect(() => {
            if(usageStore.usage.usage == undefined || usageStore.usage.usage.length == 0){
                return;
            }

            const labels = usageStore.usage.usage.map(item => new Date(item.timestamp).toLocaleTimeString());
            const cpuUsageData = usageStore.usage.usage.map(item => item.cpu_usage);
            console.log(labels, cpuUsageData);

            chartData.value = {
                labels: labels,
                datasets: [{
                    label: 'Cost in SEK',
                    backgroundColor: '#ffffff', 
                    borderColor: 'rgb(54, 162, 235)', 
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