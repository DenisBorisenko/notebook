<template>
    <div>
        <v-toolbar dark>

            <v-toolbar-title>
                <router-link :to="{name: 'home'}" class="text-uppercase white--text">
                    Home
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div>
                <router-link v-if="!$auth.check()" :to="{ name: 'login' }" class="text-uppercase white--text ma-4">Login</router-link>
                <router-link v-if="!$auth.check()" :to="{ name: 'register' }" class="text-uppercase white--text ma-4">Register</router-link>
                <router-link v-if="$auth.check()" :to="{ name: 'notes' }" class="text-uppercase white--text ma-4">My notes</router-link>
                <router-link v-if="$auth.check()" :to="{ name: 'edit-notes' }" class="text-uppercase white--text ma-4">Edit notes</router-link>
                <a v-if="$auth.check()" href="#" @click.prevent="logout" class="text-uppercase white--text ma-4">Logout</a>
            </div>
        </v-toolbar>
    </div>
</template>
<script>
    export default{
    methods:{
        logout(){
            this.$auth.logout()
            this.$router.push('/?message=logout')
        }
    }
    }
</script>
