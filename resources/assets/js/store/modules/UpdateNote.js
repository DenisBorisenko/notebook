import axios from 'axios';

export default{
    state:{
        notes: {},
        form:{
            title:'',
            body:'',
        },
        note_id:null,
    },
    getters:{
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
        }
    },
    actions:{
        update({commit,state}){
            axios.patch(`/notes/${state.note_id}`,state.form)
                .then(({data:{data}})=> {
                    commit('update',data)
                })
        },
        create({commit,state}){
            axios.post('/notes/', state.form)
            .then(({data:{data}})=> {
                commit('create',data)
            })

        },
        edit({commit}, index){
            commit('edit',index)
        },
        destroy({commit},data){
            axios.delete(`/notes/${data[0]}`).then(res =>{
                commit('destroy', data[1])
            })
        },
        listNotes({commit}){
            axios.get('/notes').then(({data:{data}}) => {commit('load_notes',data)})
        }
    },
}
