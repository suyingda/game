<style scoped>
    #cateid {
        font-size: .2rem;
        width: 100%;
        overflow: hidden;
    }

    #cateid option {
        display: block;
    }

    .isrotating_false {
        transition: 0.2s;
    }

    .isrotating_true {
        -webkit-transform: rotate(90deg);
    }

    .isrotating1 {
        font-size: 12px;
        padding: 0.1rem 0 0.6rem 8%;
        margin: 0 auto;
    }

    .transition {
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
        -moz-transition: height 0.2s;
        -webkit-transition: height 0.2s;
        -o-transition: height 0.2s;
        width: 100%;
    }

    .transition_click {
        height: 80px;
        border-bottom: 1px solid red
    }

    .red {
        font-size: .5rem;
        color: red !important;
    }

    .color {
        color: #000;
    }

    select {
        display: block;
        width: 100%;
    }
</style>
<template>
    <div>
        <!--        <div>
                        <div class="header">请选择分类：
                            <div style="float:right;  " @click="(isrotating=!isrotating)" class="isrotating_false" :class="(this.isrotating?'isrotating_true':'')">
                                <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div>
                            <div v-for="abc in list" class="transition" :class="isrotating?'transition_click':''">
                                {{abc.type}}
                                <span class="color" :class="(abc.type?'red':'')">{{abc.goods}}</span>
                            </div>
                        </div>
                </div>-->
        商品分类：

        <select>
            <option v-for="abc in list" class="color" :class="(abc.type?'red':'')">
                <span style="red;">{{abc.goods}}</span>
            </option>
        </select>
        商品名称：
        <select >
            <option v-for="abc in list"  class="color" :class="(abc.type?'red':'')">
                {{abc.goods}}
            </option>
        </select>
        <div>
            <x-input title="单价：" disabled v-model="point"></x-input>
        </div>
        <div>
            <x-input title="购买数量：" style="border: 1px solid #ccc;" v-model="value"></x-input>
            <span>库存不足</span>
        </div>
        <div>
            <x-input title="联系方式：" style="border: 1px solid #ccc;" v-model="value"></x-input>
            <span>查询凭证 5位以上QQ/手机号/固定电话等</span>
        </div>
    </div>
</template>
<script>
    import axios from './../fetch.js';
    import {Group, Blur, XButton, Card, Flexbox, FlexboxItem, Selector, XInput} from 'vux';

    export default {
        components: {Group, Blur, XButton, Card, Flexbox, FlexboxItem, Selector, XInput},
        data()
        {
            return {
                point     : 100,
                value     : 100,
                isrotating: false,
                list      : [],
            };
        },
        mounted()
        {
            axios.get('./../../static/data/Goods.json',
                /*    axios.get('/wap/news/newsList.Get',{
                        params:{
                            type:0,
                            page:0
                        }*/
                 )
                 .then((response) => {
                     this.list = response.data.ret.data.news;
                     console.log(this.list);
                 })
                 .catch((error) => {
                     console.log(error);
                 });
        },
    };
</script>