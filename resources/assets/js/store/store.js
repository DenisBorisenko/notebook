import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import UpdateNote from './modules/UpdateNote'
import ListNotes from './modules/ListNotes'




const store = new Vuex.Store({
        modules: {
            UpdateNote,
            ListNotes
        }
    }
);

export default store
