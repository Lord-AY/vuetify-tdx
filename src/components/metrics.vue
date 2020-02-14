<template>
  <div>
      <canvas id="user-metrics" width="100%" height="50px"></canvas>
  </div>
</template>

<script>

import Chart from 'chart.js';
import userChartData from '../services/chartDataServices.js'


export default {
  name: "metrics",
  data() {
    return {
        userChartData: userChartData,
    } 
  },
  methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);

        const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            responsive: true,
            options: chartData.options,
        });
      }
  },
  mounted() {
    this.createChart('user-metrics', this.userChartData);
  }
};
</script>

<style>

</style>
