<template>
  <div class="black fluid centered raised card">
    <div class="content">
      <div class="header">Syncs in realtime across clients</div>
      <div class="description">
        <form class="ui form" @submit.prevent="addStock()" novalidate>
        <div class="field">
          <div class="ui fluid action input">
            <input type="text" v-model.trim="tickerSymbol" @keyup.enter="submit" @keyup="validateInput()" name="tickerSymbol" placeholder="Ticker Symbol">
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'form-add-stock',
    data () {
      return {
        tickerSymbol: '',
        errRequired: ''
      }
    },
    sockets: {
      socketError (error) {
        this.errRequired = error
      }
    },
    methods: {
      validateInput () {
        if (!this.tickerSymbol) {
          this.errRequired = 'Ticker symbol cannot be empty.'
        } else {
          this.errRequired = ''
        }
      },
      addStock () {
        if (!this.tickerSymbol) {
          this.errRequired = 'Ticker symbol cannot be empty.'
          return
        }
        this.$socket.emit('addStock', this.tickerSymbol)
        this.tickerSymbol = ''
      }
    }
  }
</script>
