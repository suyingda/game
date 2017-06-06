<template>
    <div id="app">

        <hello></hello>
        <router-view></router-view>
<vuexdome></vuexdome>
    </div>
</template>

<script>
    import Hello from './components/Hello'
     import vuexdome from './vuex/store'
    export default {
        name      : 'app',
        components: {
            Hello,
            vuexdome
        }
    }
</script>

<style>
 *{
     margin:0; padding:0;
 }
</style>
