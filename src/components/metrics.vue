<template>
  <div>
      <canvas id="user-metrics" width="400" height="400"></canvas>
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
