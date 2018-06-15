<template>
    <div id="app">
      <div class="paysuccess">
        <div class="one">
          <img src="../../../assets/payed.png" alt="">
          <div class="overpay">完成支付</div>
        </div>
        <div class="two">一宅正在为您打包~</div>
      </div>
        <!--<div class="addresscard">-->
          <!--<div class="icon">-->
            <!--<img src="../../../assets/address.png" alt="">-->
          <!--</div>-->
          <!--<div class="info">-->
            <!--<div class="name">-->
              <!--收货人：张竹影 13812345678-->
            <!--</div>-->
            <!--<div class="address">-->
              <!--江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室天元西路去你妹的小区2栋3单元306室天元西路去你妹的小区2栋3单元306室-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <div class="heji">
        <div>合计</div>
        <div style="color:#FF6161;">¥10000</div>
      </div>
      <div class="diyongjintip">
        恭喜您支付成功，本次消费可得9.5元抵用金，可用于下次消费。
      </div>
      <div class="fenge"></div>
      <div class="concat">
        <img src="../../../assets/contact.png" alt="">
        <div>联系客服（4000-118-151）</div>
        <div class="arrow">
          <img src="../../../assets/chose-address.png" alt="">
        </div>
      </div>
      <div class="footer">
        <div>查看订单</div>
        <div @click="gohome">返回首页</div>
      </div>
    </div>
</template>
<style scoped>
  @import "paymentfinish.css";
</style>
<script>

export default {
    data() {
        return {

        }
    },
  methods:{
      gohome:function () {
        this.$router.push('/');
      }
  }
}
</script>
