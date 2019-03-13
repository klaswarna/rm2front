import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'
import router from './router'


Vue.config.productionTip = false;
Vue.use(VueSession);


window.company = [];


for (var i = 0; i< 6; i++) {
    window.company[i] = [100, 100, 100, 100, 100, 100];
}


new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
