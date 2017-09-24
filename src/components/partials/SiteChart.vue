<template>
  <div id="curve_chart">
    <line-chart :data="chartData" title="STOCKS" xtitle="Dates (6 months)" ytitle="Closing Prices"></line-chart>
  </div>
</template>

<script>
  export default {
    name: 'site-chart',
    props: {
      chartData: Array
    }
  }
</script>