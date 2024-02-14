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
            const clean = usageStore.usage.filter(item => !item.gpu_energy.startsWith('Failed'));

            const labels = clean.map(item => new Date(item.timestamp).toLocaleTimeString());
            const cpuUsageData = clean.map(item => item.gpu_energy).filter(item => !item.startsWith('Failed')).map(item => parseFloat(item) * 0.75);
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