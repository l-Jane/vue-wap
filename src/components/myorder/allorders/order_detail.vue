<template>
    <div id="app">
      <div class="zindex abso" v-show="iscancel" ref="distance">
        <div class="confirm border" @click="cancel(false)"></div>
        <div class="prompt bg border clearfix abso">
          <div class="hint">提示信息</div>
          <div class="hintchoose" v-if="id==1 && cust!=2" >您确定要删除订单吗</div>
          <div class="hintchoose" v-if="id==2">您确定要取消订单吗</div>
          <button class="ok bg fl">确定</button>
          <button class="cancel bg fr" @click='cancel(false)'>取消</button>
        </div>
      </div>
      <orderstate></orderstate>
      <status v-if="id==1 && deal==2 ||id==4" :logistics="logistics"></status>
      <addressdetail></addressdetail>
       <div class="gross bg border">
         <product v-for="(items,index) in productlists" :key="index" :productlist="items"></product>
					<price></price>
      </div>
      <orderinfo></orderinfo>
      <contact></contact>

      <div class="footer bg border">
        <button class="delete bg border fr" v-if="id==1 && cust!=2" v-tap.prevent="{ methods : cancel,paramA:true }">删除订单</button>
        <button class="after bg border fr" v-if="id==1 && cust!=2">申请售后</button>
        <button class="after remind bg border fr" v-if="id==2">立即支付</button>
        <button class="delete bg border fr" v-if="id==2" v-tap.prevent="{ methods : cancel,paramA:true }">取消订单</button>
        <button class="delete remind bg border fr" v-if="id==4">确认收货</button>
        <router-link to="/logistics"><button class="after bg border fr" v-if="id==4">查看物流</button></router-link>
        <button class="after remind bg border fr" v-if="id==3">提醒发货</button>
        <button class="after bg border fr" v-if="id==3 || id==4 || id==5 || (id==1 && cust==2)">联系客服</button>
      </div>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import product from '../sub/product.vue'
import addressdetail from '../sub/addressdetail.vue'
import contact from '../sub/contact.vue'
import price from '../sub/price.vue'
import status from '../sub/status.vue'
import orderstate from '../sub/orderstate.vue'
import orderinfo from '../sub/orderinfo.vue'


export default {
    data() {
        return {
          id:0,
          deal:0,
          cust:0,
        }
    },
    components:{
    	product,
      addressdetail,
      price,
      contact,
      status,
      orderstate,
      orderinfo
    },
  created(){
    this.id = this.$route.params.status;
    this.deal = this.$route.params.deal;
    this.cust = this.$route.params.cust;

    // 显示不同状态的控件
    if(this.id==1){
      this.close()
    }
    if(this.id==1&&this.deal==2){
      this.complete()
    }
    if(this.id==2){
      this.wait()
    }
    if(this.id==3){
      this.deliver()
    }
    if(this.id==4){
      this.accept()
    }
    if(this.id==5){
      this.return()
    }
  },
  computed: {
    ...mapState([
      'productlists','logistics','iscancel'
    ])
  },
  mounted(){
    document.addEventListener('scroll',this.scroll);
  },
  beforeDestroy () {
    document.removeEventListener('scroll',this.scroll);
  },
  methods:{
  ...mapMutations([
      'close','accept','deliver','complete','wait','return','cancel'
    ]),
    scroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.$refs.distance.style.top=scrollTop+'px';
      if(this.iscancel){
        this.cancel(false)
      }
    },
  },
}
</script>

<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
  @import '../../../../static/css/myorder/confirm.css';
</style>
