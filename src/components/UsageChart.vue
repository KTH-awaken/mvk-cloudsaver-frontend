<template>
    <div>
      <Chart
        id="energy-chart"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { Line  } from 'vue-chartjs';
  import { useUsageStore } from '@/stores/usage';
  import {
    defineComponent,
    ref,
    onMounted,
    watch,
    computed
  } from 'vue';
  
  // Assuming these interfaces are imported or defined somewhere in your project
  interface PodUsage {
    custom_name: string;
    namespace: string;
    pod_name: string;
    resource_name: string;
    usage: UsageRecord[];
  }
  
  interface UsageRecord {
    _id: string;
    cpu_usage: string;
    memory_usage: string;
    timestamp: number;
    energy_consumption: string; // this will be in kWh
  }

  interface ChartData {
  labels: string[];
  datasets: Dataset[];
}
interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  fill: boolean;
}

function djinkigkahnGineusGetColor(name: string){
    let hash = 0;
    for (let i =0; i <name.length; i++){
        const char = name.charCodeAt(i);
        hash = (hash <<5) - hash +char;
        hash = hash & hash;
    }
    let colorToReturn ='#';
    for (let i = 0; i< 3; i++){
      const value = (hash>> (i * 8)) & 0xFF;
      colorToReturn += ('00' + value.toString(16)).slice(-2)
    }

    return colorToReturn;
}
  
export default defineComponent({
  name: 'EnergyChart',
  components: { Chart: Line },

  setup() {
    const usageStore = useUsageStore();
    const chartData = ref<ChartData>({ labels: [], datasets: [] });

    // Fetch the usage data when the component is mounted
    onMounted(() => {
    usageStore.fetchUsage();
    });

    // Reactive effect to update the chart data when the usage data changes
    watch(() => usageStore.usage, (newUsage: PodUsage[]) => {
    if (newUsage && newUsage.length > 0) {
        const namespaceData: Record<string, number[]> = {};

        // Group usage records by namespace
        newUsage.forEach(podUsage => {
        const namespace = podUsage.namespace;
        if (!namespaceData[namespace]) {
            namespaceData[namespace] = [];
        }
        podUsage.usage.forEach(record => {
            namespaceData[namespace].push(parseFloat(record.energy_consumption));
        });
        });

        // Generate datasets for the chart
        chartData.value.datasets = Object.entries(namespaceData).map(([namespace, data]) => ({
        label: namespace,
        data: data,
        borderColor: djinkigkahnGineusGetColor(namespace),
        fill: false,
        }));
        // Set the labels for the x-axis
        chartData.value.labels = newUsage.map(podUsage => podUsage.usage.map(record => new Date(record.timestamp).toLocaleTimeString())).flat();
    }
    }, { immediate: true });

    //Chart options
  const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
        display: true,
        },
        title: {
        display: true,
        text: 'Energy Consumption Chart',
        },
    },
    scales: {
        y: {
        title: {
            display: true,
            text: 'Energy Consumption (kWh)',
        },
        },
    },
    });
    //Total usage
    const totalUsage = computed(() => {
    return chartData.value.datasets.reduce((total, dataset) => {
        return total + dataset.data.reduce((sum, value) => sum + value, 0);
    }, 0);
    });

    return {
    chartData,
    chartOptions,
    totalUsage
    };
}
});
</script>
  