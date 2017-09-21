<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  @import url("./../semantic/dist/semantic.min.css");

  body {
    background: #213e46 url('./assets/stock-market.jpg') no-repeat fixed center !important;
    background-size: cover !important;
  }
  #app {
    font-family: "Roboto", "Helvetica", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
