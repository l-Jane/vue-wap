<template>
  <div class="full">
    <header class="fl rela full border">
      <img src="../../../src/assets/logo.png" class="logo abso" v-tap.prevent="{ methods : toinput }">
      <input type="text" class="full bg border" placeholder="搜索商品名、品牌、品类" ref='input' @focus="toinput">
      <img class="abso search" src="../../../src/assets/search.png">
      <img class="abso person" src="../../../src/assets/person.png" v-tap.prevent="{ methods : login }">
    </header>
    <div id="app">
      <div class="abso" :class="{'whole':isshow}" v-tap.prevent="{ methods : login }">
          <div v-if='isshow' class="login bg abso">
            <div class="triangle abso"></div>
            <ul class="personlist">
              <li class="list" v-if='succeed'><img src="../../../src/assets/quit.png"><p>退出</p></li>
              <li class="list" v-else><img src="../../../src/assets/login.png"><p v-tap.prevent="{ methods : enter }">登陆</p></li>
              <li class="list" v-tap.prevent="{ methods : myorder }"><img src="../../assets/myorder.png"><p>我的订单</p></li>
              <router-link to="/orderConfirm/address"><li class="list"><img src="../../../src/assets/address.png"><p>收货地址</p></li></router-link>
              <router-link to="/orderConfirm/myticket"><li class="list"><img src="../../../src/assets/stick.png"><p>我的券包</p></li></router-link>
              <li class="list"><img src="../../../src/assets/service.png" alt=""><p class="last">联系客服</p></li>
              <li class="list" v-if='succeed'><p class="coupon">抵用金：¥0</p></li>
            </ul>
        </div>
      </div>
        <swipe></swipe>
        <slide></slide>
        <classify ref='top' :class='{"ontop":istop}'></classify>
        <goodsdesc
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          v-for="(item,index) in homeproducts" :key="index" :homeproduct="item"></goodsdesc>
        <router-link to="/shopingCart/shopingCart"><div class="shopcar fixed"></div></router-link>
        <div class="stick fixed" v-if='ismove' v-tap.prevent="{ methods : back }"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import swipe from './swipe.vue'
import slide from './slide.vue'
import classify from './classify.vue'
import goodsdesc from './goodsdesc.vue'


export default {
  data () {
    return {
      // 分类栏
        istop:false,
        heightToTop: null,
        finalheight: null,
      // 登陆界面的显示
        isshow:false,
      // 返回顶部按钮
        ismove:false,
      // 商品详情
        homeproducts:[]
    }
  },
  computed: {
    ...mapState([
      'succeed','isopen'
    ])
  },
  watch: {
    isopen(val, oldval) {
        if(val===true){
          document.body.scrollTop = this.finalheight;
          document.documentElement.scrollTop = this.finalheight;
      }
    }
  },
  created(){
    this.gethomeinfo()
  },
  mounted(){
    this.finalheight = this.getfinalheight();
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    //登陆
    enter () {
        this.$router.push('/login')
    },
// 个人中心的显示隐藏
    login () {
      this.isshow=!this.isshow;
    },
//    点击logo获取搜索栏焦点
    toinput () {
      this.$router.push('/search');
    },
// 跳转至我的订单页
    myorder () {
      this.$router.push({name:'myorder',params:{status:'1'}});
    },
//    分类栏吸顶
    handleScroll () {
      this.isshow=false;
       // 初始距离顶部高度 offsetheight
       let offsetheight=this.$refs.top.$el.offsetTop;
       //滚动后页面顶部隐藏的距离 height
       let height=document.documentElement.scrollTop || document.body.scrollTop;
       this.heightToTop = height;
       if(this.heightToTop>=this.finalheight){
           this.istop=true;
         if(this.heightToTop>=1000){
           this.ismove=true;
         }else{
           this.ismove=false;
         }
       }else{
         this.istop=false;
       }
  },
    getfinalheight () {
      return this.$refs.top.$el.offsetTop;
    },
//    回到顶部
    back(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.ismove=false;
    },
    /*``````````````````测试````````````````````*/
    gethomeinfo(){
      this.$http.get('../../../static/api/home.json').then((res)=>{
        this.homeproducts=JSON.parse(res.bodyText)[0].homeproducts
      })
    },

    /*`````````````````````````````````````````````*/
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.homeproducts[this.homeproducts.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.homeproducts.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
    // ````````````````````````````````````````````
  },
  components:{
    swipe,
    slide,
    classify,
    goodsdesc
  }
}
</script>

<style scoped>
  @import '../../../static/css/home/home.css';
</style>
