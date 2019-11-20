
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Notes from '../components/notes/Notes.vue';
import EditNotes from '../components/notes/EditNotes.vue';
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue';
import Home from '../components/Home.vue';



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
            path: '/notes',
            name: 'notes',
            component: Notes,
            meta: {
                auth: true
            }
        },
        {
            path: '/edit-notes',
            name: 'edit-notes',
            component: EditNotes,
            meta: {
                auth: true
            }
        },
    ],
    hashbang: false,
    mode : 'history',
});

export default router
