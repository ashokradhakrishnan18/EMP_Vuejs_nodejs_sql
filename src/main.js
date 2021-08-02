import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import router from './router/index';
import '../public/styles.scss';
import VueSignaturePad from 'vue-signature-pad';
import store from './store/store'




Vue.use(VueSignaturePad);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
