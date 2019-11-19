import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Home from './components/Home.vue';
import App from './components/App.vue'
import Dashboard from './components/notes/Notes.vue';
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue';
axios.defaults.baseURL = 'http://test-project2:8000/api';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuetify)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        }
    ],
    hashbang: false,
    mode : 'history',
});
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
    el: '#app',
});

// Vue.router = router
// Vue.use(require('@websanova/vue-auth'), {
//    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
// });
// App.router = Vue.router
// new Vue(App).$mount('#app');


