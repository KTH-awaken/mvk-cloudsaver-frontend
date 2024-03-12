<template>
  <div v-if="usageStore.isLoading">Loading...</div>
  <div v-else-if="usageStore.error">{{ usageStore.error }}</div>
  <div v-else>
    <canvas id="usageChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUsageStore } from '@/stores/usage';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const usageStore = useUsageStore();

onMounted(async () => {
  await usageStore.fetchUsage();

  if (!usageStore.error) {
    const datasets = usageStore.data.map((dataSet, index) => ({
      label: dataSet.label,
      data: dataSet.usage.map(u => ({
        x: new Date(u.timestamp * 1000),
        y: u.cpu_percentage
      })),
      fill: false,
      borderColor: getRandomColor(),
      lineTension: 0.1
    }));

    const ctx = document.getElementById('usageChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { datasets },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              tooltipFormat: 'll HH:mm',
              parser: 'timestamp', // If using UNIX timestamps, specify the parser here
            },
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'CPU Usage Percentage'
            }
          }
        },
        plugins: {
          legend: {
            display: true
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style scoped>
#usageChart {
  max-height: 400px;
}
</style>

 
 
 <!-- <template>
  <div v-if="usageStore.isLoading">Loading...</div>
  <div v-else-if="usageStore.error">{{ usageStore.error }}</div>
  <div v-else>
    <div v-for="(dataSet, index) in usageStore.data" :key="dataSet.label">
      <canvas :id="`chart-${index}`"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUsageStore } from '@/stores/usage';
import { Chart } from 'chart.js';

const usageStore = useUsageStore();

onMounted(async () => {
  await usageStore.fetchUsage();

  if (!usageStore.error) {
    usageStore.data.forEach((dataSet, index) => {
      const ctx = document.getElementById(`chart-${index}`).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: dataSet.label,
              data: dataSet.usage.map(u => ({
                x: new Date(u.timestamp * 1000),
                y: parseFloat(u.cpu_usage)
              })),
              fill: false,
              borderColor: getRandomColor(),
              lineTension: 0.1
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'second'
              },
              distribution: 'linear'
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script> -->

<!-- 
<template>
  <div v-if="usageStore.isLoading">Loading...</div>
  <div v-else-if="usageStore.error">{{ usageStore.error }}</div>
  <div v-else>
    <canvas id="usageChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUsageStore } from '@/stores/usage';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const usageStore = useUsageStore();

onMounted(async () => {
  await usageStore.fetchUsage();

  if (!usageStore.error) {
    const datasets = usageStore.data.map((dataSet, index) => ({
      label: dataSet.label,
      data: dataSet.usage.map(u => ({
        x: new Date(u.timestamp * 1000),
        y: u.cpu_percentage
      })),
      fill: false,
      borderColor: getRandomColor(),
      lineTension: 0.1
    }));

    const ctx = document.getElementById('usageChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { datasets },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              tooltipFormat: 'll HH:mm'
            },
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'CPU Usage Percentage'
            }
          }
        },
        plugins: {
          legend: {
            display: true
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style scoped>
#usageChart {
  max-height: 400px;
}
</style> -->