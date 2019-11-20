<template>
    <v-container>
        <form @submit.prevent="register">
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
            <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

            <div class="mt-5">
                <v-btn class="mr-4" type="submit" color="green">Register</v-btn>
                <router-link to="/login">
                    <v-btn class="mr-4" type="submit" color="blue">Login</v-btn>
                </router-link>
            </div>
        </form>
    </v-container>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    name: null,
                    email: null,
                    password: null,
                },
                errors: {},
            };
        },
        methods: {
            register(){

                this.$auth.register({
                    data: this.form,
                    error: function (resp) {
                        this.errors = resp.response.data.errors;
                    },
                    redirect: '/login?message=register',
                });
            }
        }
    }
</script>
