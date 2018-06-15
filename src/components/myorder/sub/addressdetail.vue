<template>
    <div id="app">
      <router-link to="/orderConfirm/address">
        <div class="info bg border rela">
          <div class="privacy">
            <div class="master">收货人：{{name}}<span>{{tele}}</span></div>
          </div>
          <div class="site">
            <img class="abso" src="../../../assets/receiver.png">
            <p>{{address}}</p>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'张竹影',
        tele:'15234567890',
        address:'江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室'
      }
    }
  }
</script>

<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
