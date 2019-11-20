import axios from 'axios';

export default{
    state:{
        notes: {},
        form:{
            title:'',
            body:'',
        },
        note_id:null,
        errors:{title:null,body:null},
    },
    getters:{
        ERRORS(state){
          return state.errors
        },
        NOTES(state){
            return state.notes
        },
        FORM(state){
            return state.form
        },
        NOTE_ID(state){
            return state.note_id
        }

    },
    mutations:{
        destroy(state, index){
            state.notes.splice(index,1)
        },
        edit(state,index){
            state.form.title = state.notes[index].title
            state.form.body =  state.notes[index].body
            state.note_id = state.notes[index].id
            state.notes.splice(index,1)
        },
        update(state,data){
            state.notes.unshift(data)
            state.form.title = null
            state.form.body = null
            state.note_id = null
        },
        create(state,data){
            state.notes.unshift(data)
            state.form.title = null
            state.form.body = null
        },
        load_notes(state,data){
            state.notes = data
        },
        set_errors(state,data){
            state.errors = data
        }

    },
    actions:{
        update({commit,state}){
            axios.patch(`/notes/${state.note_id}`,state.form)
                .then(({data:{data}})=> {
                    commit('set_errors',{})
                    commit('update',data)
                }).catch(err => {
                commit('set_errors',err.response.data.errors )
            })
        },
        create({commit,state}){
            axios.post('/notes/', state.form)
            .then(({data:{data}})=> {
                commit('set_errors',{})
                commit('create',data)
            }).catch(err => {
                commit('set_errors',err.response.data.errors )
            })

        },
        edit({commit}, index){
            commit('set_errors',{})
            commit('edit',index)
        },
        destroy({commit},data){
            axios.delete(`/notes/${data[0]}`).then(res =>{
                commit('destroy', data[1])
            })
        },
        listNotes({commit}){
            axios.get('/notes/notes-list').then(({data:{data}}) => {commit('load_notes',data)})
        }
    },
}
