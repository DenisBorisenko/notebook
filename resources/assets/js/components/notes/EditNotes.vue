<template>
    <v-container>
        <h3>Create new note</h3>
        <v-form @submit.prevent="submit">
            <v-text-field
                v-model="FORM.title"
                label="Note title"
                type="text"
            ></v-text-field>
            <v-text-field
                v-model="FORM.body"
                label="Note body"
                type="text"
            ></v-text-field>
<!--            <span class="red&#45;&#45;text" v-if="errors.email">{{errors.email[0]}}</span>-->
            <div class="mt-5">
                <v-btn class="mr-4" type="submit" color="green" v-if="!NOTE_ID">Create</v-btn>
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
                    <div v-for="(note,index) in NOTES"
                         :key="note.id">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-btn icon small @click="edit(index)">
                                    <v-icon dark >mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon small @click="destroy([note.id,index])" >
                                    <v-icon dark >mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{note.title}}</v-list-item-title>
                                <v-list-item-title>{{note.body}}</v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>

                        <v-divider
                            v-if="index + 1 < NOTES.length"
                            :key="index"
                        ></v-divider>
                    </div>
                </v-list-item-group>
            </v-list>

        </v-card>
    </v-container>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default{
        computed:{
            ...mapGetters([
                'NOTES',
                'NOTE_ID',
                'FORM'
            ]),
        },
        methods:{
            ...mapActions(['update','create','destroy','edit','listNotes']),
            submit(){
                this.NOTE_ID ? this.update() : this.create()
            },

        },
        created(){
            this.listNotes()
        }
    }
</script>
