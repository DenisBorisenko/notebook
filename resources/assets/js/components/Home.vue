<template>
    <v-content class="bg">
        <v-container fluid>
            <v-row  align="center" justify="center">
                <v-col cols="6">
                    <div class="text-center">
                        <v-snackbar
                            v-model="snackbar"
                            :timeout="6000"
                            top
                            color="red lighten-2"
                        >
                            {{ message }}
                            <v-btn
                                dark
                                text
                                @click="snackbar = false"
                            >
                                Закрыть
                            </v-btn>
                        </v-snackbar>
                        <h1>Forum</h1>
                        <span>Here you can create ask and answer questions.</span>
                        <div class="mt-5">
                            <router-link to="/ask">
                                <v-btn dark>Ask question
                                    <v-icon  right>mdi-comment-question-outline</v-icon>
                                </v-btn>
                            </router-link>
                            <router-link to="/forum">

                                <v-btn dark>List of questions
                                    <v-icon right>mdi-filter-variant</v-icon>
                                </v-btn>
                            </router-link>

                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>
<script>
    export default {
        head:{
            title:'home page'
        },
        data: () => ({
            message:'',
            snackbar:false,
        }),
        mounted(){
            const {message} = this.$route.query
            if(message === 'logout') this.message = 'Вы вышли из аккаунта'
            else if(message === 'register') this.message = 'Вы зарегистрировались! Необходимо войти'

            this.snackbar = !!this.message
        }
    }
</script>

