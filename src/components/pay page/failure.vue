<template>
    <div id="app">
        <div class="fail rela bg">
          <img class="abso" src="../../assets/payfail.png">
          <p class="payfail">支付失败</p>
          <p class="unfinished">订单尚未完成，好物不等人，赶紧去完成支付吧！</p>
        </div>
        <lookfor></lookfor>
    </div>
</template>

<script>
  import lookfor from '../myorder/sub/lookfor.vue'

    export default {
        data() {
            return {}
        },
        components: {
          lookfor
        }
    }
</script>


<style scoped>
  @import '../../../static/css/pay page/failure.css';
</style>
