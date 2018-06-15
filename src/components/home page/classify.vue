<template>
	<div id="app">
		<div class="bg rela" :class="{'close':!isopen,'open':isopen}">
			<div :class="{screen:!isopen}">
        <div class="slide clearfix" ref="slides"  :class="{'bottom':isopen,pb:!isopen}">
          <div class="all" v-if="isopen">全部类别</div>
          <ul class="classify border" :class="{'width':isopen}" v-bind="{style:'width:'+ulwidth+'rem'}">
            <li v-for='(item,index) in classify' v-tap.prevent="{ methods : getinfos,paramA:item.id,paramB:index }" :class="{'recom':isadd==index}">{{item.name}}</li>
          </ul>
        </div>
      </div>
			<div class="drop bg abso" :class="{bgcolor:isopen}" v-tap.prevent="{ methods : open }">
				<img v-if="!isopen" src="../../assets/open.png">
        <img v-else src="../../assets/close.png">
			</div>
		</div>
	</div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
	export default {
		data(){
			return {
          isadd:0,
          ulwidth:0,
          left:0,
					classify:[]
			}
		},
    computed: {
      ...mapState([
        'isopen'
      ])
    },
    created(){
      this.getclassify();
    },
    updated(){
      this.$refs.slides.scrollLeft=this.left
    },
		methods:{
      ...mapMutations([
        'open','changeclassify'
      ]),
      // 点击分类名切换到相应的分类中
      getinfos(params){
        const _self=this;
        _self.changeclassify(params.paramA);
        _self.isadd=params.paramB;
        _self.left=params.event.currentTarget.offsetLeft-152;
        if(_self.isopen==true){ 
          _self.open();
          if(_self.isadd>2){
            _self.left=70 * (_self.isadd-2);
          }
        }
      },
      /*``````````````````测试````````````````````*/
      // 获取分类列表+分类名的个数
      getclassify(){
        this.$http.get('../../../static/api/home.json').then((res)=>{
          this.classify=JSON.parse(res.bodyText)[0].classify;
          const liwidth=1.84;
          this.ulwidth=liwidth * JSON.parse(res.bodyText)[0].classifylength + (liwidth-0.24);
        })
      }

      /*`````````````````````````````````````````````*/
		}
	}
</script>

<style scoped>
  @import '../../../static/css/home/classify.css';
</style>

