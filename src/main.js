import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import { currency } from './currency'

Vue.filter('currency', currency)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
})
