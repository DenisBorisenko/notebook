<template>
    <v-container>
        <form @submit.prevent="login">
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

            <div class="m-5">
                <v-alert type="error" v-if="errors.none">
                    {{errors.none[0]}}
                </v-alert>

            </div>
            <div class="mt-5">
                <v-btn class="mr-4" type="submit" color="green">Login</v-btn>
                <router-link to="/signup">
                    <v-btn class="mr-4" type="submit" color="blue">Signup</v-btn>
                </router-link>
            </div>
        </form>
    </v-container>
</template>
<script>
    export default {
        data(){
            return{
                form:{
                  email:null,
                  password:null,
                },
                errors:{}
            }
        },

       
    }
</script>
