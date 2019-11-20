<template>
    <v-container>
        <v-snackbar
            v-model="snackbar"
            :timeout="6000"
            top
            color="success"
        >
            {{ message }}
            <v-btn
                light
                text
                @click="snackbar = false"
            >
                Закрыть
            </v-btn>
        </v-snackbar>
        <form @submit.prevent="login">
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

            <div class="m-5">
                <v-alert type="error" v-if="errors.none">
                    {{errors.none}}
                </v-alert>

            </div>
            <div class="mt-5">
                <v-btn class="mr-4" type="submit" color="green">Login</v-btn>
                <router-link to="/register">
                    <v-btn class="mr-4" type="submit" color="blue">Register</v-btn>
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
            email: null,
            password: null,
            error: false,
          },
          errors:{},
          message:'',
          snackbar:false,
      }
    },
      head:{
          title:'Login'
      },
      mounted(){
          const {message} = this.$route.query
          if(message === 'register') this.message = 'Вы зарегистрировались! Необходимо войти'
          this.snackbar = !!this.message
      },
    methods: {
      login(){
        this.$auth.login({
            params: this.form,
            error: function (err) {
                this.errors = err.response.data.errors
            },
            rememberMe: true,
            redirect: '/notes',
            fetchUser: true,
        });
      },
    }
  }
</script>
