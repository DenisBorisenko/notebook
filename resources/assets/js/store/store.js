import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import UpdateNote from "./modules/UpdateNote";




const store = new Vuex.Store({
        modules: {
            UpdateNote
        }
    }
);

export default store
