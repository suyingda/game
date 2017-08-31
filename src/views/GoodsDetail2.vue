<template>
    <div  >
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
            console.log(this.$route.query)
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': ''
        },
        methods: {


        }
    }
</script>