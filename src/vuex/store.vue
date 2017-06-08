<template>
	<div>
		我是vuex - dome<br/>
		<button @click='increment'>按钮</button>
		{{count}}<br/>{{abcount}}
		<button @click='ab'>按钮</button>
	</div>
	
</template>
<script >
	import { mapActions,mapGetters  } from 'vuex'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			...mapActions([
				'increment',
				'ab'  
				]),
		},
		computed: {
			...mapGetters([
				'count',
				'abcount'
				])
		},
		
		mounted(){
			console.log(this.$store)


		}
		
	}
</script>