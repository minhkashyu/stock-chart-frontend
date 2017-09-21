<template>
  <div class="black fluid centered raised card">
    <div class="ui top attached label">Syncs in realtime across clients</div>
    <div class="content">
      <form class="ui form" @submit.prevent="addStock()" novalidate>
        <div class="field">
          <div class="ui action input">
            <input type="text" v-model.trim="stockCode" @keyup.enter="submit" @keyup="validateInput()" name="stockCode" placeholder="Stock Code">
            <button class="ui right labeled icon button" type="submit">
              <i class="plus icon"></i>
              Add
            </button>
          </div>
          <div class="ui pointing red basic label" v-if="errRequired">
            {{ errRequired }}
          </div>
        </div>
      </form>
      <div class="ui error message" v-if="errors.length > 0">
        <i class="close icon"></i>
        <div class="header">Error(s):</div>
        <ul class="list">
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'form-add-stock',
    props: {
      errors: Array,
      stocks: Array,
      nextStockId: Number
    },
    data () {
      return {
        stockCode: '',
        errRequired: '',
        mutableNextStockId: this.nextStockId
      }
    },
    methods: {
      validateInput () {
        if (!this.stockCode) {
          this.errRequired = 'Stock code cannot be empty.'
        } else {
          this.errRequired = ''
        }
      },
      addStock () {
        if (!this.stockCode) {
          this.errRequired = 'Stock code cannot be empty.'
          return
        }
        this.stocks.push({
          id: this.mutableNextStockId++,
          title: this.stockCode,
          name: 'New Stock Prices, Dividends, Splits and Trading Volume'
        })
        this.stockCode = ''
      }
    }
  }
</script>
