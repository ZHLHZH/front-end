import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import './assets/css/reset.css'
import './assets/css/globle.css'
import './plugins/element'
import axios from 'axios'
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://120.76.47.219:8080/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
