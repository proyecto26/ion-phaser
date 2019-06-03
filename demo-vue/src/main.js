import Vue from 'vue'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'

import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/ion-\w*/]

defineIonPhaser(window)

new Vue({
  render: h => h(App),
}).$mount('#app')
