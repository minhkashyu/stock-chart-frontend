<template>
  <div class="ui centered grid container">
    <h1 class="ui center aligned header">Chart the Stock Market</h1>
    <h4 class="ui center aligned header">A Freecodecamp Full-Stack Project using Vue.js, Semantic UI with Google Material theme, Express.js, and MongoDB</h4>
    <div class="sixteen wide column">
      <div id="curve_chart">
        <i class="massive line chart icon"></i>
      </div>
    </div>
    <div class="sixteen wide column">
      <div class="ui three stackable cards">
        <div class="fluid centered raised card" :class="randomColor(index)" v-if="stocks.length > 0" v-for="(stock, index) in stocks" :key="stock.id">
          <div class="content">
            <i class="right floated remove icon" @click="removeStock(index)"></i>
            <div class="header">{{ stock.title }}</div>
            <div class="description">
              <p>{{ stock.name }}</p>
            </div>
          </div>
        </div>
        <form-add-stock :stocks="stocks" :nextStockId="nextStockId" :errors="errors"></form-add-stock>
      </div>
    </div>
  </div>
</template>

<script>
  import formAddStock from './partials/AddStock'

  export default {
    name: 'home',
    components: {formAddStock},
    data () {
      return {
        errors: [],
        stocks: [
          {
            id: 1,
            title: 'FB',
            name: 'Facebook'
          },
          {
            id: 2,
            title: 'GGL',
            name: 'Google'
          },
          {
            id: 3,
            title: 'B',
            name: 'Barnes Group Inc. (B) Prices, Dividends, Splits and Trading Volume'
          },
          {
            id: 4,
            title: 'K',
            name: 'Kellogg Co (K) Prices, Dividends, Splits and Trading Volume'
          }
        ],
        nextStockId: 5
      }
    },
    methods: {
      randomColor (index) {
        let colors = ['pink', 'teal', 'yellow', 'violet', 'olive', 'orange', 'green', 'brown', 'blue', 'grey', 'purple', 'red']
        return colors[index % 12]
      },
      removeStock (index) {
        this.stocks.splice(index, 1)
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
    background-color: #000000;
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
    color: #125D84; /* dark ocean blue */
  }
</style>
