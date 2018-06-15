<template>
  <div id="app">
    <div class="myticket">
    <div class="nav">
      <img src="../../assets/back.png" alt="" @click="goHome">
      我的券包
    </div>
    <div class="quan" v-for="quan in quanlist">
      <img src="../../assets/background-t.png" alt="">
      <div class="money">
        <span>¥{{quan.money}}</span>
        <span class="quantype">{{quan.quantype}}</span>
      </div>
      <div class="description">
        {{quan.description}}
      </div>
      <div class="rule">
        查看更多规则 >
      </div>
      <div class="use">
        <div>可用</div>
      </div>
    </div>
    <!--过期券-->
    <div class="quan" v-for="quan in overquanlist">
      <img src="../../assets/my-voucher-failure-background.png" alt="">
      <div class="money">
        <span>¥{{quan.money}}</span>
        <span class="quantype">{{quan.quantype}}</span>
      </div>
      <div class="description" style="color: #7D7D7D;">
        {{quan.description}}
      </div>
      <div class="rule" style="color: #7D7D7D;">
        查看更多规则 >
      </div>
      <div class="use">
        <div style="color: #323232;">已过期</div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        quanlist:[
          {
            money:'1000',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          },
          {
            money:'900',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          },
          {
            money:'800',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          },{
            money:'700',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          }
        ],
        overquanlist:[
          {
            money:'1000',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          },
          {
            money:'900',
            quantype:'通用券',
            description:'每满1000减50，可累计使用不限品牌、品类，用完作废'
          }
        ]
      }
    },
    methods:{
      goHome:function () {
        this.$router.push('/');
      }
    }
  }
</script>
<style scoped>
  @import 'myticket.css';
</style>
