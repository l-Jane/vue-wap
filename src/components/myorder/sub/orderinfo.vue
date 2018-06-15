<template>
      <div class="orderinfo border bg">
        <div class="inner rela" v-for="item in product">
          <p>订单编号：{{item.ordernum}}</p>
          <p>创建时间：{{item.createtime}}</p>
          <p v-if="iscomplete||isdeliver||isaccept||isreturn||(cust==2 &&(reserve==1 || reserve==2))">付款时间：{{item.paytime}}<br><span class="lastpay" v-if="(cust==2 && deal==2) || ((id==4 || id==5) && cust==2)">{{item.lastpay}}</span> </p>
          <p v-if="iscomplete|| (isreturn && deliver==0) ||isaccept">发货时间：{{item.delivertime}}</p>
          <p v-if="isclose||iscomplete">成交时间：{{item.turnover}}</p>
          <button class="ordercopy abso bg border"
                  type="button"
                  v-clipboard:copy="item.ordernum"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError">复制</button>
        </div>
      </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

    export default {
        data() {
            return {
              id:0,
              deal:0,
              cust:0,
              reserve:0,
              deliver:0,
            }
        },
      created(){
        this.id = this.$route.params.status;
        this.deal = this.$route.params.deal;
        this.cust = this.$route.params.cust;
        this.reserve = this.$route.params.reserve;
        this.deliver = this.$route.params.deliver;
      },
      computed: {
        ...mapState([
          'isclose','iscomplete','isdeliver','isaccept','isreturn','product'
        ])
      },
      methods:{
        onCopy: function (e) {
          console.log('复制成功');
        },
        onError: function (e) {
          console.log('复制失败');
        }
      }
    }
</script>

<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
