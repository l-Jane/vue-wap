<template>
    <div id="app">
      <div class="paymentfail">
      <div class="icon">
        <img src="../../../assets/payfail.png" alt="">
      </div>
      <div class="payfail">支付失败</div>
      <div class="description">订单尚未完成，好物不等人，赶紧去完成支付吧！</div>
      <div class="footer">
        <div>查看订单</div>
        <div @click="gohome">返回首页</div>
      </div>
      </div>
    </div>
</template>
<style scoped>
  @import "paymentfail.css";
</style>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      gohome:function () {
        this.$router.push('/');
      }
    }
  }
</script>
