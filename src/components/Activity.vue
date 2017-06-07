<template>
    <div>

        <h1> 敬请期待....</h1>
        <button @click='abcount'>按钮</button>
    </div>
</template>
<style scoped>
   h1{
       text-align: center;
   }
</style>
<script >
import {mapGetters,mapActions} from 'vuex'
	export default{
		methods:{
		...mapActions([
			'abcount'
			])
		},
		 
	}
</script>