import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import 'tui-calendar/dist/tui-calendar.min.css'
import Switches from 'vue-switches';
import 'tui-calendar/dist/tui-calendar.css'
import { Calendar } from '@toast-ui/vue-calendar'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('calendar',Calendar);
Vue.component('switches', Switches);
Vue.use(Datetime);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
