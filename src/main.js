// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/js/rem'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import './lib/css/must.css'
Vue.use(Vuex)
Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
