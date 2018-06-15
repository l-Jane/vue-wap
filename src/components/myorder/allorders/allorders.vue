<template>
  <div id="app">
   <!-- 全部商品 -->
   <div class="whole bg full border" v-for="item in products" v-if="status==item.status || status==1">
       <div v-tap.prevent="{ methods : tap,paramA:item.status,paramB:item.deal,paramC:item.reserve,paramD:item.deliver,paramE:item.items[0].cust,paramF:item.items,paramG:item.orderinfo,paramH:item.prices,paramI:item.logistics }">
         <div class="top border clearfix" :class="{'only': item.num>=2}">
           <div class="date fl" v-for="info in item.orderinfo">{{info.createtime}}</div>
           <div class="state fr" v-if="item.deal==1 && item.status==1">交易关闭</div>
           <div class="state fr" v-if="item.deal==2 && item.status==1">交易完成</div>
           <div class="state fr" v-if="item.status==2 && item.car==0" >等待支付</div>
           <div class="state fr" v-if="item.status==2 && item.car==1">等待付款</div>
           <div class="state fr" v-if="item.status==3">等待发货</div>
           <div class="state fr" v-if="item.status==4">已发货</div>
           <div class="state fr" v-if="item.status==5">退款中</div>
         </div>
         <product v-for="(items,index) in item.items" :key="index" :productlist="items"></product>
         <div class="total clearfix" v-if='item.num>=2'>
           <p class="count fr">共{{item.num}}件商品 合计：<span class="alltotal">{{item.prices[0].total}}</span></p>
         </div>
       </div>
     <div class="bottom clearfix">
       <div class="tele fr" v-if="item.status==1" v-tap.prevent="{ methods : cancel,paramA:true }">删除订单</div>
       <div class="tele fr" v-if="item.status==1 && item.deal==2 && item.done==0">申请售后</div>
       <div class="remind fr" v-if="item.status==2" v-tap.prevent="{ methods : tap,paramA:item.status,paramB:item.deal,paramC:item.reserve,paramD:item.deliver,paramE:item.items[0].cust,paramF:item.items,paramG:item.orderinfo,paramH:item.prices,paramI:item.logistics }">立即支付</div>
       <div class="tele fr" v-if="item.status==2" v-tap.prevent="{ methods : cancel,paramA:true }">取消订单</div>
       <div class="remind fr" v-if="item.status==3">提醒发货</div>
       <div class="remind fr" v-if="item.status==4">确认收货</div>
       <div class="tele fr" v-if="item.status==4" v-tap.prevent="{ methods : observe,paramA:item.logistics,paramB:item.items,paramC:item.orderinfo }">查看物流</div>
       <div class="tele fr" v-if="item.status==3 || item.status==4 || item.status==5 ">联系客服</div>
     </div>
   </div>
  </div>
</template>

<script>
  import product from '../sub/product.vue'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        products:''
        }
      },
    computed: {
      ...mapState([
        'status','iscancel'
      ])
    },
    created(){
      this.getproduct()
    },

    methods: {
      ...mapMutations([
        'post','getordernumber','getprices','getlogistics','cancel'
      ]),
      /*``````````````````测试````````````````````*/
        getproduct(){
          this.$http.get("../../../../static/api/data.json").then(
              function(res){
                this.products=res.body[0].data;
              }
            )
        },

      /*`````````````````````````````````````````````*/
      // 点击订单查看订单详情，并且传输数据
      tap(params){
        this.$router.push({name:'order_detail',params:{status:params.paramA, deal:params.paramB,reserve:params.paramC,deliver:params.paramD, cust:params.paramE}});
        //获取商品详情信息
        this.post(params.paramF);
        //获取订单信息
        this.getordernumber(params.paramG);
        //获取商品价格信息
        this.getprices(params.paramH);
        this.getlogistics(params.paramI);
      },
      // 查看物流按钮
      observe(params){
        this.$router.push('/logistics');
        this.getlogistics(params.paramA);
        this.post(params.paramB);
        this.getordernumber(params.paramC);
      }
    },
    components: {
      product
    },
  }
</script>

<style scoped>
  @import '../../../../static/css/myorder/myorder.css';
  @import '../../../../static/css/myorder/product.css';
</style>

