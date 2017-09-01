<style scoped>
    h1 {
        margin-left: 40px;
        line-height: 30px;
        font-size: 1.4em;
        color: #398DE7;
    }
</style>
<template>
    <div>

        <h1>选择商品</h1>
        <div>
            在线客服：459913591
            <a target="blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=459913591&amp;Site=永恒 低价发卡网&amp;Menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=1:459913591:41" alt="点击这里给我发消息" align="absmiddle"></a>

        </div>
        <div> 卖家信用：<img title="交易范围：虚拟产品   好评率：100%" src="http://www.yekepay.com/links/zzym/images/xy5.gif" align="absmiddle"></div>
        <div>成功订单：30天内销售：未开放统计 单</div>
        <div>
            单价：
        </div>
        <div>
            <Goods></Goods>
        </div>
    </div>
</template>
<script>
    import axios from './../fetch.js';
    import Goods from './../components/Goods.vue';

    export default {
        components: {Goods},
        data()
        {
            return {
                loading: false,
                post   : null,
                error  : null,
                list   : {},
            };

        },
        props     : {
            id: {
                type: String,
            },
        },
        mounted()
        {

            /*            axios.get('/wap/index/scrollWiper.Get')
                             .then((response) => {
                                 this.list = response.data.ret[0];
                             })
                             .catch((error) => {
                                 console.log(error);
                             });
                        axios.get('/wap/news/oneNews.Get?nid=53134013631565824')
                             .then((response) => {
                                 console.log(response.data.ret.publish_moment + '我是第二个');
                             })
                             .catch((error) => {
                                 console.log(error);
                             });
                        axios.get('/wap/banner/bannerList.Get', {
                                 params: {
                                     route_uri: '/home',
                                     type_id  : 1,
                                 },
                             })
                             .then((response) => {

                             })
                             .catch((error) => {
                                 console.log(error);
                             });*/

            /*   axios.post('/Member/Account/perfectInfo.Post',{
                       'cardId'   : 420984198703247511,
                       'cardName' : '邓永',
                       'accountId': '',
                    })
                    .then((response) => {

                    })
                    .catch((error) => {
                        console.log(error);
                    });*/

        },
        watch     : {
            // 如果路由有变化，会再次执行该方法
            '$route': '',
        },
        methods   : {},
    };
</script>