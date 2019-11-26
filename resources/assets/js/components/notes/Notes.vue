<template>
            <v-container fluid grid-list-md>
                <v-layout row wrap justify-center>
                    <v-flex xs8>

                        <v-text-field
                            label="Search note"
                            prepend-inner-icon="mdi-magnify"
                            solo-inverted

                            v-model="q"
                            @keyup.enter="search(q)"
                        ></v-text-field>

                        <v-card class="mt-2" v-for="note in NOTES_ALL" :key="note.id">
                            <v-card-title>
                                    {{note.title}}
                            </v-card-title>
                            <v-card-subtitle class="pb-0">Published {{note.created_at}}</v-card-subtitle>

                            <v-card-text class="text--primary">
                                {{note.body}}
                            </v-card-text>

                        </v-card>
                    </v-flex>
                </v-layout>
                <div class="text-center">
                <v-btn
                    class="ma-2"
                    v-for="(key,value) in LINKS"
                    :key="value"

                    depressed
                    small
                    :color=value : 'indigo' ? 'disabled'
                    @click.prevent="loadMore(key)">
                    {{value}}
                </v-btn>
                </div>
            </v-container>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data(){return{
            q:''
        }},
        computed:{
            ...mapGetters([
                'NOTES_ALL',
                'LINKS'
            ]),
        },
        methods:{
            ...mapActions(['loadNotes','loadMore','search']),
        },
        created(){
            this.loadNotes()
        }
    }
</script>
