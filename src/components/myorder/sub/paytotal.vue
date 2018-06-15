<template>
    <div class="total bg border">
      <div class="add border clearfix">
        <span class="fl">合计</span>
        <span class="money fr">{{totalprice}}</span>
      </div>
      <p class="prompt">恭喜您支付成功，本次消费可得{{coupon}}元抵用金，可用于下次消费。</p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        totalprice:'¥1000',
        coupon:'36'
      }
    },
  }
</script>


<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
