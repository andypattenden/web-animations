import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { InlineSvgPlugin } from 'vue-inline-svg'
Vue.use(InlineSvgPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
