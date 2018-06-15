<template>
    <div id="app">
      <header class="rela full border searchheader">
        <router-link to="/"><img src="../../../src/assets/back.png" class="logo abso"></router-link>
        <input type="text" class="full bg border" placeholder="搜索商品名、品牌、品类" @input="write" v-focus="true" @keyup.enter="submit(message)" v-model.trim="message">
        <img class="abso search" src="../../../src/assets/search.png">
        <img class="abso cancel" src="../../../src/assets/cancel.png" v-if="message" v-tap.prevent="{ methods : cancel }">
      </header>
      <div class="body border">
        <div v-if="nosearch || !message">
          <div class="allpeople">大家都在搜</div>
          <div class="classify border" v-for="item in classifylist" v-tap.prevent="{ methods : getdetail , paramA :item.id,paramB:item.title}">{{item.title}}</div>
        </div>
        <div v-else>
          <div v-if="isfind">
            <div class="nofind bg full">未找到对应商品</div>
            <div class="recom border">咚咚为您推荐以下商品</div>
            <goodsdesc v-for="(item,index) in homeproducts" :key="index" :homeproduct="item"></goodsdesc>
          </div>
          <goodsdesc v-else v-for="(item,index) in homeproducts" :key="index" :homeproduct="item"></goodsdesc>
        </div>
        <router-link to="/shopingCart/shopingCart"><div class="shopcar fixed"></div></router-link>
      </div>
    </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import goodsdesc from './goodsdesc.vue'

    export default {
        data() {
            return {
              message:'',
              // 大家都在搜
              nosearch:true,
              // 未找到对应商品
              isfind:false,
              // 推荐的分类
              classifylist:[],
              // 商品详情
              homeproducts:[]
            }
        },
      directives: {
        focus: {
          inserted: function (el, {value}) {
            if (value) {
              el.focus();
            }
          }
        }
      },
      created(){
        this.getClassifyinfo()
      },
      methods:{
        ...mapMutations([
          'changeclassify'
        ]),
        getdetail(params){
          this.isfind=false;
          this.nosearch=false;
          this.message=params.paramB;
          this.changeclassify(params.paramA);
          this.gethomeinfo()
        },
        submit(msg){
            this.nosearch=false;
            if(this.homeproducts==0){
              this.isfind=true;
            }
        },
        cancel(){
          this.message='';
        },
        write(){
          this.nosearch=true;
        },

        /*``````````````````测试````````````````````*/
        gethomeinfo(){
          this.$http.get('../../../static/api/home.json').then((res)=>{
            this.homeproducts=JSON.parse(res.bodyText)[0].homeproducts;
          })
        },
        getClassifyinfo(){
          this.$http.get('../../../static/api/search.json').then((res)=>{
            this.classifylist=JSON.parse(res.bodyText)[0].classifylist;
          })
        }
        /*`````````````````````````````````````````````*/
      },
      components:{
        goodsdesc
      }
    }
</script>

<style scoped>
  @import '../../../static/css/home/home.css';
  @import '../../../static/css/home/search.css';
</style>
