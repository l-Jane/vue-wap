<template>
  <div id="app">
    <div class="payment">
      <div class="title">请选择支付方式</div>
      <div class="line"></div>
      <router-link to="/orderConfirm/paymentfinish/paymentfinish">
      <div class="wechat">
        <img src="../../assets/weixin@2x.png" alt="">
        微信支付
      </div>
      </router-link>
      <div class="line"></div>
      <router-link to="/orderConfirm/paymentfinish/paymentfail">
      <div class="alipay">
        <img src="../../assets/zhifubao@2x.png" alt="">
        支付宝
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    method:{

    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .payment{
    max-width:540px;
    margin:0 auto;
    width:100%;
    height:153px;
    background: #ffffff;
    position:fixed;
    bottom:0;
  }
  .title{
    font-size: 13px;
    color: #B1B1B1;
    height:33px;
    width:100%;
    line-height:33px;
    text-align: center;
  }
  .line{
    margin-left:3.7%;
    width:92.5%;
    height:1px;
    background: #DCDDDD;
  }
  .wechat,.alipay{
    height:59px;
    width:100%;
    line-height:59px;
    font-size: 16px;
    color: #323232;
  }
  .wechat img,.alipay img{
    margin-left:3.7%;
    width:29px;
    height:29px;
    line-height:59px;
    vertical-align: middle;
  }
</style>
