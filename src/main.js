// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import axios from 'axios'
Vue.prototype.$ajax = axios;
// Vue.use(axios);


import tap from 'v-tap';
Vue.use(tap);

// 引入mint-ui及其插件
import 'mint-ui/lib/style.min.css';
import Mint from 'mint-ui';
Vue.use(Mint);

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

// 引入复制和点击插件
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

import vueTap from 'v-tap';
Vue.use(vueTap);

// 引入公共文件
import '../static/css/common.css';
import '../static/js/flexible.js';
import common from '../static/js/common.js';
Vue.prototype.common=common;

Vue.config.productionTip = false;

router.afterEach(function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  template: '<App/>',
  components: { App }
});
