<template>
    <div>
        <v-toolbar dark>
            
            <v-toolbar-title>
                <router-link :to="{name: 'home'}">
                    Home
                </router-link>
            </v-toolbar-title>
        
            <v-spacer></v-spacer>
            <div>
                        <router-link :to="{ name: 'login' }">Login</router-link>
                        <router-link :to="{ name: 'register' }">Register</router-link>
                
            </div>
        </v-toolbar>
    </div>
</template>
<script>
    export default{
       
    }
</script>
