import Vue from 'vue'
import App from './index.vue'
import '@/common/js/trans.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
