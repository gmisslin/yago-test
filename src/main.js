import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Axios from "axios"
import Vuetify from 'vuetify/lib';

Vue.use(Axios);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
