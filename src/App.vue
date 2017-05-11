<template>
    <div id="app">

        <hello></hello>
        <router-view></router-view>
    </div>
</template>

<script>
    import Hello from './components/Hello'

    export default {
        name      : 'app',
        components: {
            Hello
        }
    }
</script>

<style>
 *{
     margin:0; padding:0;
 }
</style>
