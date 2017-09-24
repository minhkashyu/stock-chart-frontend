<template>
  <div class="ui centered grid container">
    <h1 class="ui center aligned header">Chart the Stock Market</h1>
    <h4 class="ui center aligned header">A Freecodecamp Full-Stack Project using Vue.js, Semantic UI with Google Material theme, Express.js, Socket.IO, and MongoDB</h4>
    <div class="sixteen wide column">
      <site-chart></site-chart>
    </div>
    <div class="sixteen wide column">
      <div class="ui three stackable cards">
        <div class="fluid centered raised card" :class="randomColor(index)" v-if="stocks.length > 0" v-for="(stock, index) in stocks" :key="stock._id">
          <div class="content">
            <i class="right floated remove icon" @click="removeStock(index, stock._id)"></i>
            <div class="header">{{ stock.symbol }}</div>
            <div class="description">
              <p>{{ stock.name }}</p>
            </div>
          </div>
        </div>
        <form-add-stock :stocks="stocks" ></form-add-stock>
      </div>
    </div>
  </div>
</template>

<script>
  import formAddStock from './partials/AddStock'
  import siteChart from './partials/SiteChart'

  export default {
    name: 'home',
    components: {formAddStock, siteChart},
    data () {
      return {
        stocks: [],
        isConnected: false
      }
    },
    sockets: {
      connect () {
        // Fired when the socket connects.
        this.isConnected = true
      },
      disconnect () {
        this.isConnected = false
      },
      getStocks (stocks) {
        this.stocks = stocks
      },
      added (stock) {
        this.stocks.push(stock)
      },
      deleted (stock) {
        this.stocks = this.stocks.filter(function (item) {
          return item._id !== stock._id
        })
      }
    },
    methods: {
      randomColor (index) {
        let colors = ['pink', 'teal', 'yellow', 'violet', 'olive', 'orange', 'green', 'brown', 'blue', 'grey', 'purple', 'red']
        return colors[index % 12]
      },
      removeStock (index, stockId) {
        this.stocks.splice(index, 1)
        this.$socket.emit('deleteStock', stockId)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1.ui.header,
  h4.ui.header{
    color: white;
    text-shadow: 1px 1px #213e46;
  }

  #curve_chart {
    width: 100%;
  }

  .ui.card > .content .remove.icon,
  .ui.cards > .card > .content .remove.icon {
    cursor: pointer;
    opacity: .75;
    -webkit-transition: color .1s ease;
    transition: color .1s ease;
  }

  .ui.card > .content .remove.icon:hover,
  .ui.cards > .card > .content .remove.icon:hover {
    color: #213e46;
  }
</style>
