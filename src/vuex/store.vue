<template>
	<div>
	我是vuex - dome<br/>
	<button @click='increment'>按钮</button>
{{count}}
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
	        'increment'  
	    ]),
	 },
	 computed: {
    ...mapGetters([
      'count'
    ])
  },
  mounted(){
      console.log(this.$store)
  }
 
}
</script>