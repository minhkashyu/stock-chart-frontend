<template>
  <div id="curve_chart">
    <line-chart :data="chartData" title="STOCKS on NASDAQ" xtitle="Date" ytitle="Value"></line-chart>
  </div>
</template>

<script>
  export default {
    name: 'site-chart',
    data () {
      return {
        chartData: [['Jan', 4], ['Feb', 2], ['Mar', 10], ['Apr', 5], ['May', 3]]
      }
    }
  }
</script>