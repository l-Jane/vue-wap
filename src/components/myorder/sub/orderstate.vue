<template>
    <div id="app">
      <div class="header">
        <img v-tap.prevent="{ methods : back}" class="back fl" src="../../../assets/back.png">
        <p class="logistics fl">订单详情页</p>
      </div>

      <div class="off border rela" v-if='ispay'>
      		<img class="abso" src="../../../assets/waitpay.png">
					<p class="stop">等待支付</p>
					<p class="desc">您的订单已提交，快快完成支付，把心水美物领回家~</p>
      </div>


      <div class="off border rela" v-if='isdeliver'>
          <img class="abso" src="../../../assets/payed.png">
          <p class="stop">买家已付款，等待发货</p>
          <p class="desc">您的美物已完成打包，即刻上路~</p>
      </div>


      <div class="off border rela" v-if='iscomplete'>
          <img class="abso" src="../../../assets/payed.png">
          <p class="stop">交易完成</p>
          <p class="desc">期待下次为您服务~</p>
      </div>


      <div class="off border rela" v-if='isclose'>
          <img class="abso" src="../../../assets/orderoff.png">
          <p class="stop">交易关闭</p>
          <p class="desc">交易关闭已完成，去逛逛其他家居美物吧，定有一款合你心意~</p>
      </div>

      <div class="off border rela" v-if='isaccept'>
          <img class="abso" src="../../../assets/deliver.png">
          <p class="stop">卖家已发货</p>
          <p class="desc">您的包裹正迎风狂奔中~</p>
      </div>

      <div class="off border rela" v-if='isreturn'>
          <img class="abso" src="../../../assets/refund.png">
          <p class="stop">退款处理中</p>
          <p class="desc">正在为您处理退款，请耐心等待~</p>
      </div>

      <div class="off border rela" v-if='ispay_second'>
          <img class="abso" src="../../../assets/payed.png">
          <p class="stop">支付完成</p>
          <p class="desc">您已支付了预定金，小咚会尽快与您确认商品信息，请耐心等待~</p>
      </div>

      <div class="off border rela" v-if='ispay_first'>
        <img class="abso" src="../../../assets/payed.png">
        <p class="stop">支付完成</p>
        <p class="desc">小咚正在为您打包~</p>
      </div>
    </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {}
    },
  computed: {
    ...mapState([
      'ispay','isdeliver','iscomplete','isclose','isaccept','isreturn','ispay_second','ispay_first'
    ])
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  @import "../../../../static/css/myorder/logistics.css";
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
