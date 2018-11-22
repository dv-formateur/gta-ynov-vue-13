import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(vueEventCalendar, {locale: 'en'})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
