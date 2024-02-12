<template >
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useUsageStore } from '@/stores/usage'
import { ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'UsageChart',
    components: { Bar },
    setup() {
        const usageStore = useUsageStore();

        const labels = usageStore.usage.map(item => item.timestamp);
        const cpuUsageData = usageStore.usage.map(item => item.cpu_usage);

        const chartData = ref({
            labels: labels,
            datasets: [
                {
                    label: 'CPU Usage',
                    data: cpuUsageData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }
            ]
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
}
</script>