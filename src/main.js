import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniCrosshair, uniArrowCircleRight } from 'vue-unicons/src/icons'

Unicon.add([uniCrosshair, uniArrowCircleRight])
Vue.use(Unicon, {
  height: 35,
  width: 35
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
