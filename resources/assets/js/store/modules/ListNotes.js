import axios from 'axios';

export default{
    state:{
        notes:{},
        links:{},
    },
    getters:{
        NOTES_ALL(state){
            return state.notes
        },
        LINKS(state){
            return state.links
        }
    },
    mutations:{
        SET_NOTES(state,data){
            state.notes = data
        },
        SET_LINKS(state,links){
            state.links = links
        }
    },
    actions: {
        loadNotes({commit}){
            axios.get('/notes').then(({ data:{data, links}}) => {
                commit('SET_NOTES',data)
                commit('SET_LINKS',links)
            })
        },
        loadMore({commit},key){
            if(key){
                axios.get(key).then(({data:{data,links}})=> {
                    commit('SET_NOTES',data)
                    commit('SET_LINKS',links)
                })

            }
        },
        search({commit},query){

        }
    }
}
