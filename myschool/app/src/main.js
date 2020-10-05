import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./axios/index.js"
//vant
import Vant from 'vant';
import { Uploader, PullRefresh, Form, ContactCard, ContactList, ContactEdit, ShareSheet } from 'vant';
import 'vant/lib/index.css';

import 'amfe-flexible'



Vue.use(ShareSheet);
Vue.use(Uploader);
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(Vant);
Vue.use(PullRefresh);
Vue.use(Form);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')