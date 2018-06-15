<template>
    <div id="app">
        <div v-for="item in prices">
          <div class="explain border clearfix" v-if="!(status==2 && reserve==2)">
            <span class="fl">商品总价</span>
            <span class="fr">{{item.alltotal}}</span>
          </div>
          <div class="explain border clearfix" v-if="((status!=1 && status!=2) && cust==2) || (cust==2 && deal==2) || (status==2 && reserve==2)">
            <span class="fl">商品总价</span>
            <span class="fr">{{item.finalpay}}</span>
          </div>
          <div class="explain border clearfix" v-if="(status!=1 && status!=2 && status!=5 ) || (cust==1 && deal==1) || deal==2 || (status==2 && (reserve==2 || cust==1)) || (status==5 && cust==1)">
            <span class="fl">优惠券</span>
            <span class="fr">-{{item.discounts}}</span>
          </div>
          <div class="explain border clearfix" v-if="(status!=1 && status!=2 && status!=5 ) || (cust==1 && deal==1) || deal==2 || (status==2 && (reserve==0 || reserve==2 || cust==1)) || (status==5 && cust==1)">
            <span class="fl">抵用金</span>
            <span class="fr">-{{item.instead}}</span>
          </div>
          <div class=" pricetotal add border clearfix">
            <span class="fl">合计</span>
            <span class="money fr">{{item.total}}</span>
          </div>
      </div>
    </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
    export default {
      data() {
          return {
            status:0,
            deal:0,
            cust:0,
            reserve:0
          }
      },
      created(){
        this.status = this.$route.params.status;
        this.deal = this.$route.params.deal;
        this.cust = this.$route.params.cust;
        this.reserve = this.$route.params.reserve
      },
      computed: {
      ...mapState([
          'prices',
        ]),
      },
    }
</script>

<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
