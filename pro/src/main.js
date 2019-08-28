// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//适配
import 'lib-flexible/flexible'
//vueui
import Vant from 'vant';
import 'vant/lib/index.css';
import './data/prolist.js'
import { PullRefresh } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';

Vue.use(Area);


Vue.use(AddressEdit);




Vue.use(PullRefresh);

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
