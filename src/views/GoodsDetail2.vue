<template>
    <div  >
        <!-- 我是 $route.params.id：{{ $route.params.id }}<br/>
      我是$route.query.id  {{ $route.query}}<br/>
     我是$route.params {{$route.params}}<br/>-->
        我只是接受一个参数：{{ $route.params.id }}<br/>
        我只是接受一个对象参数：{{ $route.query.id}}

    </div>
</template>
<script>

    export default {
        data () {
            return {
                loading: false,
                post: null,
                error: null
            }

        },
        mounted () {

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
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': ''
        },
        methods: {


        }
    }
</script>