import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Field } from 'vant';


Vue.use(Button);
Vue.use(Field);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
