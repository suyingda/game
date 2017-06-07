<template>
    <div id="app">

        <hello></hello>
        <router-view></router-view>
<!-- <vuexdome></vuexdome> -->
<fotter></fotter>
    </div>
</template>

<script>
    import Hello from './components/Hello'
     import vuexdome from './vuex/store'
     import fotter from './components/fotter'
    export default {
        name      : 'app',
        components: {
            Hello,
            vuexdome,
            fotter
        }
    }
</script>

<style>
 *{
     margin:0; padding:0;
 }
</style>
