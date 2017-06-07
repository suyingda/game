<template>
    <div id="app">

        <hello></hello>
        <div class="center">
        <router-view></router-view>
        </div>
<!-- <vuexdome></vuexdome> -->
<fotter v-show='abcount'   ></fotter>
    </div>
</template>

<script>
    import Hello from './components/Hello'
     import vuexdome from './vuex/store'
     import fotter from './components/fotter'
     import {mapGetters} from 'vuex'
    export default {
        name      : 'app',
        components: {
            Hello,
            vuexdome,
            fotter
        },
        computed: {
    ...mapGetters([
      'abcount'
    ])
  },
  mounted(){
    console.log(this.abcount)
  }
    }
</script>

<style>
 *{
     margin:0; padding:0;
 }
 .center{
    
    margin-bottom: 55px;
 }
</style>
