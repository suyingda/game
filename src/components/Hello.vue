<template>
    <div>
        <div style="position: fixed; top:0; left:0;right:0;  ">
        <tab>
           <tab-item selected @on-item-click="goFirst">首页</tab-item>
           <tab-item @on-item-click="goFirst2">物品</tab-item>
           <tab-item @on-item-click="goFirst3">活动</tab-item>
       </tab>
        </div>
   </div>
</template>


<script>
    import {Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem} from 'vux'

    export default {
        components: {
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem
        },
        data () {
            return {}
        },
        mounted(){
            this.goFirst();
        },
        methods   : {
            goFirst(){
                this.$router.push({path: '/header'})
            },
            goFirst2(){
                this.$router.push({path: '/Thegoods'})
            },
            goFirst3(){
             this.$router.push({path: '/Activity'})
         },
     },
 }
</script>

<style scoped>


</style>