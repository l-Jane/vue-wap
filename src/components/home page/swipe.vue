<template>
	<div id="temp">
		<mt-swipe :auto="4000" id='swipe' class='full'>
		  <!-- <mt-swipe-item></mt-swipe-item> -->
		  <mt-swipe-item v-for='(item,index) in imglists' :key='index'>
				<img :src="item.img" class="full">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		data(){
			return {
        imglists:[]
      }
		},
    created(){
      this.getimgs()
    },
    methods:{

		 /* ````````````````````` 测试 ```````````````````````````*/
		  getimgs(){
		    this.$http.get('../../../static/api/home.json').then((res)=>{
          this.imglists=JSON.parse(res.bodyText)[0].imglists
        })
      }
      /* ````````````````````````````````````````````````*/
    }
	}
</script>


<style scoped>
  @import '../../../static/css/home/swipe.css';
</style>
