<template>
    <div>
        <app-toolbar/>
        <router-view/>
        <app-footer/>
    </div>
</template>
<script>
    import AppToolbar from './AppToolbar'
    import AppFooter from './AppFooter'

    export default{
        components:{
            AppToolbar,
            AppFooter,
        }
    }
</script>
