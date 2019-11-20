<template>
    <v-container>
        <h3>Create new note</h3>
        <v-form @submit.prevent="submit">
            <v-text-field
                v-model="body"
                label="Category name"
                type="text"
            ></v-text-field>
<!--            <span class="red&#45;&#45;text" v-if="errors.email">{{errors.email[0]}}</span>-->
            <div class="mt-5">
                <v-btn class="mr-4" type="submit" color="green" v-if="!note_id">Create</v-btn>
                <v-btn class="mr-4" type="submit" color="teal" v-else>Update</v-btn>
            </div>
        </v-form>

        <v-card class="mt-5">
            <v-toolbar
                dark
            >
                <v-toolbar-title>My notes</v-toolbar-title>
            </v-toolbar>
            <v-list dense>
                <v-list-item-group>
                    <div v-for="(note,index) in notes"
                         :key="note.id">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-btn icon small @click="edit(index)">
                                    <v-icon dark >mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon small @click="destroy(note.id,index)" >
                                    <v-icon dark >mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{note.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider
                            v-if="index + 1 < notes.length"
                            :key="index"
                        ></v-divider>
                    </div>
                </v-list-item-group>
            </v-list>

        </v-card>
    </v-container>
</template>
<script>
    export default{
        data(){return{
            notes: {},
            body:null,
            note_id:null,
        }},
        methods:{
            submit(){
                this.note_id ? this.update() : this.create()
            },
            update(){
                this.axios.patch(`/api/notes/${this.note_id}`,this.name)
                    .then((res)=> {
                        this.notes.unshift(res.data)
                        this.name = null
                        this.editSlug = null
                    })
            },
            create(){
                this.axios.post('notes/',this.body)
                    .then((res)=> {
                        console.log(res)
                        // this.notes.unshift(res.data)
                        // this.name = ''
                    })

            },
            destroy(slug,index){
                this.notes.splice(index,1)
                this.axios.delete(`/api/category/${slug}`)
            },
            edit(index){
                this.name = this.notes[index].name
                this.editSlug = this.notes[index].slug
                this.notes.splice(index,1)
            }
        },
        created(){
            // if(!User.admin()){
            //     this.$router.push('/forum')
            // }
            this.axios.get('/api/notes')
                .then(({data:{data}}) => {this.notes = data})
        }
    }
</script>
