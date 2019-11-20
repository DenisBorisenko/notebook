import Vue from 'vue';

//vuetify
import Vuetify from 'vuetify'

//axios
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL = 'http://test-project2.loc:8000/api';


//mounted component
import App from './components/App.vue'

//VueRouter
import router from './router/router'

//Vuex
import store from './store/store'


Vue.use(VueAxios, axios);
Vue.use(Vuetify)



Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router

Vue.component('appMain', require('./components/App').default);

const app = new Vue({
    vuetify: new Vuetify(),
    router,
    store,
    el: '#app',
});



