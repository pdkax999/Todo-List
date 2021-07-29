import Vue from 'vue';
import App from './App.vue';
import 'lib-flexible';
// import router from './router';
import store from './store/index';

Vue.config.productionTip = false;



new Vue({
 beforeCreate(){

   Vue.prototype.$bus = this

 },
  // router,
  store,
  render: (h) => h(App),
}).$mount('#app');
