<template>
  <div id="app">
    <orderstate></orderstate>
    <paytotal></paytotal>
    <contact class="mt"></contact>
    <lookfor class="bt"></lookfor>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import orderstate from '../myorder/sub/orderstate.vue'
  import paytotal from '../myorder/sub/paytotal.vue'
  import contact from '../myorder/sub/contact.vue'
  import lookfor from '../myorder/sub/lookfor.vue'
  export default {
    data() {
      return {}
    },
    components: {
      orderstate,
      paytotal,
      contact,
      lookfor,
    },
    created(){
      this.pay_first()
    },
    computed: {
      ...mapState([
        'ispay_first',
      ])
    },
    methods:{
      ...mapMutations([
        'pay_first'
      ]),
    }
  }
</script>

<style scoped>
  .bt {
    border-top: 1px solid #DCDDDD;
  }
  .mt {
    margin-top: 0.267rem!important;
  }
</style>
